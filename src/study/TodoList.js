import React from 'react'
import Todo from "./Todo";

const TodoList = ({todoskey, toggleTodo}) => {
    return (
        //遍历todoskey
        todoskey.map((obj) => (
            <Todo todokey={obj} key={obj.id} funToggleTodo={toggleTodo} />
        ))
    )
}

export default TodoList;