/* eslint-disable no-undef */
import BaseTextInput from './BaseTextInput.vue'

describe('<BaseTextInput />', () => {
  it('renders base text input component', () => {
    // renders the component in DOM
    // cy.mount() is a custom command learn more about 
    // cypress custom commands here https://docs.cypress.io/api/commands/mount#Creating-a-New-cy-mount-Command
    cy.mount(BaseTextInput);

    // asserts that the text input is rendered with the correct placeholder
    cy.get('input').should('have.attr', 'placeholder', 'Add a new todo');

    // asserts that when 'add' button is clicked, an event is emitted
    // with the  payload containing the value of the text input
    cy.get('input[type="text"]').type('new todo');
    cy.get('input[type=submit]').click().then(() => {
      // Cypress.vueWrapper provides access to the Vue Test Utils
      // with this wrapper can access any Vue Test Utils API
      // learn more about Vue Test Utils here https://vue-test-utils.vuejs.org/
      // e.g cy.vueWrapper().emitted() returns all the events emitted by the BaseTextInput component
      cy.wrap(Cypress.vueWrapper.emitted()).should('have.property', 'newTodo');
      expect(Cypress.vueWrapper.emitted().newTodo[0]).to.deep.equal(['new todo']);
    });
  })
});