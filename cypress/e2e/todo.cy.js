/* eslint-disable no-undef */

describe('Todo tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8081/');
  });

  it('it should add todo', () => {
    cy.get('ul').find('li').should('have.length', 3);
    cy.get('input[type="text"]').type('new todo{enter}');
    cy.get('ul').find('li').should('have.length', 4);
    cy.get('input[type="text"]').type('more todo');
    cy.get('input[type=submit]').click();
    cy.get('ul').find('li').should('have.length', 5);
  })
  
  it('it should delete todo', () => {
    cy.get('ul').find('li').should('have.length', 3);
    cy.get(':nth-child(1) > button').click();
    cy.get('ul').find('li').should('have.length', 2);
  });
})