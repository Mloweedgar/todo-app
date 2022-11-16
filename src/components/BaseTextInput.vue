<template>
    <form class="add-todo-form">
        <input type="text" class="input" placeholder="Add a new todo" v-model="todo">
        <input type="submit" value="Add" @click="emitNewTodoEvent">
    </form>
</template>
  
<script>
export default {
    data() {
        return {
            todo: ''
        }
    },
    methods: {
        emitNewTodoEvent(e) {
            e.preventDefault();
            this.$emit('newTodo', this.todo);
            this.todo = '';
        }
    }
}
</script>
  
<style scoped>
.input {
    width: 100%;
    padding: 8px 10px;
    border: 1px solid #32485F;
}

.add-todo-form {
    width: 100%;
    display: flex;
    align-items: center;
}

input[type="submit"] {
    margin-left: 5px;
    padding: 8px 10px;
    border: 1px solid #32485F;
    background-color: #32485F;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #00C185;
}
</style>
  