<template>
	<div>
		<BaseTextInput 
			@newTodo="addTodo"
		/>
		<ul v-if="todos.length">
			<TodoListItem
				v-for="todo in todos"
				:key="todo.id"
				:todo="todo"
				@remove="removeTodo"
			/>
		</ul>
		<p class="empty-state-message" v-else>
			Nothing left in the list. Add a new todo in the input above.
		</p>
	</div>
</template>

<script>
import BaseTextInput from './BaseTextInput.vue'
import TodoListItem from './TodoListItem.vue'

let nextTodoId = 1

export default {
	components: {
		BaseTextInput, TodoListItem
	},
  data () {
    return {
      todos: []
    }
  },
	methods: {
		addTodo (todo) {
            
			const trimmedText = todo.trim()
			if (trimmedText) {
				this.todos.unshift({
					id: nextTodoId++,
					text: trimmedText
				})
			
			}
		},
		removeTodo (idToRemove) {
			this.todos = this.todos.filter(todo => {
				return todo.id !== idToRemove
			})
		}
	}
}
</script>