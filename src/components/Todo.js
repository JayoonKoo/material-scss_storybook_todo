import React, { useCallback, useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = props => {
	const [todos, setTodos] = useState([]);

	const addTodo = useCallback((todo) => {
		setTodos((prevTodos) => [...prevTodos, todo])
	}, [])

	const doneTodo = useCallback((id) => {
		const index = todos.findIndex(todo => todo.id === id)
		const doneTodo = {
			...todos[index],
			done: true
		}
		const nextState = [...todos]
		nextState.splice(index, 1, doneTodo)
		setTodos(nextState)
	}, [todos])

	return (
		<>
			<TodoInput addTodo={addTodo}/>
			<TodoList todos={todos} doneTodo={doneTodo}/>
		</>
	)
}

Todo.propTypes = {

}

export default Todo
