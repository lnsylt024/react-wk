import React from "react";

const Todo = ({todokey, funToggleTodo}) => {
    const handleTodoClick = () => {
        //选中，调用App.js中的方法。
        funToggleTodo(todokey.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox"
                       checked={todokey.completed}
                       onChange={handleTodoClick}
                       readOnly
                />
            </label>
            {todokey.name}
        </div>
    )
};

export default Todo;
