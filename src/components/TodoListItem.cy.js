/* eslint-disable no-undef */
import TodoListItem from './TodoListItem.vue'

describe('<TodoListItem />', () => {
  it('renders todo list item', () => {
    const text = 'new todo';
    const id = 1;
    // mount the component with props
    //see: https://test-utils.vuejs.org/guide/
    cy.mount(TodoListItem, {props: {todo: { id, text }}});

    // asserts that the todo list item is rendered with the correct text
    cy.get('li').contains(text);

    // asserts that when 'x' button is clicked, 'remove' event is emitted with the correct payload
    cy.get('button').click().then(() => {
      cy.wrap(Cypress.vueWrapper.emitted()).should('have.property', 'remove');
      expect(Cypress.vueWrapper.emitted().remove[0]).to.deep.equal([id]);
    })
  })
});