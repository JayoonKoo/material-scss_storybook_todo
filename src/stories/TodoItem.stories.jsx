import React from 'react'
import TodoItem from '../components/TodoItem'

export default {
	title: 'TODO/TodoItem',
	component: TodoItem
}

export const Item = (args) => <TodoItem {...args} />
