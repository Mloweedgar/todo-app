/* eslint-disable no-undef */
import TodoListItem from './TodoListItem.vue'

describe('<TodoListItem />', () => {
  it('renders todo list item', () => {
    const text = 'new todo';
    const id = 1;
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(TodoListItem, {props: {todo: { id, text }}});
    cy.get('li').contains(text);
    cy.get('button').click().then(() => {
      cy.wrap(Cypress.vueWrapper.emitted()).should('have.property', 'remove');
      expect(Cypress.vueWrapper.emitted().remove[0]).to.deep.equal([id]);
    })
  })
})