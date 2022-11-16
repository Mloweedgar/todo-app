/* eslint-disable no-undef */
import BaseTextInput from './BaseTextInput.vue'

describe('<BaseTextInput />', () => {
  it('renders base text input component', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(BaseTextInput);
    cy.get('input').should('have.attr', 'placeholder', 'Add a new todo');
    cy.get('input[type="text"]').type('new todo');
    cy.get('input[type=submit]').click().then(() => {
      cy.wrap(Cypress.vueWrapper.emitted()).should('have.property', 'newTodo');
      expect(Cypress.vueWrapper.emitted().newTodo[0]).to.deep.equal(['new todo']);
    });
  })
})