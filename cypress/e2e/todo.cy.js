/* eslint-disable no-undef */

// describe() function is used to group tests
describe('Todo tests', () => {
  it('should display empty state message', () => {
    // cy.visit() used to visit a remote url
    // learn more about it here: https://docs.cypress.io/api/commands/visit#Syntax
    cy.visit('http://localhost:8080');

    // cy.get command Gets one or more DOM elements by selector or alias
    // learn more about cypress commands/api here: https://docs.cypress.io/api/table-of-contents
    cy.get('.empty-state-message')
    .contains('Nothing left in the list. Add a new todo in the input above.')
    .should('be.visible'); 
  });

  it('should add todo', () => {

    // add todo by typing in the input and pressing enter
    cy.get('input[type="text"]').type('new todo{enter}');

    // check if the todo is added
    cy.get('ul').contains('new todo').should('be.visible');
    cy.get('ul').find('li').should('have.length', 1);


    // add another todo by typing in the input and pressing 'add' button
    cy.get('input[type="text"]').type('more todo');
    cy.get('input[type=submit]').click();

    // check if the todo is added
    cy.get('ul').contains('more todo').should('be.visible');
    cy.get('ul').find('li').should('have.length', 2);
  });
  
  it('should delete todo', () => {
    // delete the first todo
    cy.get(':nth-child(1) > button').click();

    // check if the todo is deleted
    // cy.should() command is used to assert that the todo list has only one todo
    // learn more about cypress assertions here: https://docs.cypress.io/guides/references/assertions
    cy.get('ul').find('li').should('have.length', 1);
  });
});