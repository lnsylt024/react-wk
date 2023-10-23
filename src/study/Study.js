import {useState, useRef} from 'react';
import {v4 as uuidv4} from "uuid";
import TodoList from "./TodoList";

function Study() {
    //引数[todos]はObjectとなる
    const [todos, setTodos] = useState([]);

    //映射对象
    const todoNameRef = useRef();

    const handleAddTodo = () => {
        //追加
        //获取输入的值
        const name = todoNameRef.current.value;
        //判断是否为空
        if (name ==="") {
            return;
        }
        //设定返回对象
        setTodos((prevTodos)=>{
            //uuidv4是UUID不重复值
            return [...prevTodos,{id: uuidv4(), name: name, completed: false}]
        })
        //清空输入框
        todoNameRef.current.value = null;
    };

    const funToggleTodo = (key) => {
        //复制对象
        const newTodos=[...todos];
        //获取指定的值
        const todoB = newTodos.find((obj) => {
            //值比较
            return obj.id === key
        });

        //将现有的值更新（false->true）
        todoB.completed = !todoB.completed;
        //更新后的对象重新设定到返回列表中
        setTodos(newTodos);
    }

    const handleDelTodo = () => {
        //削除
        //过滤选中的对象
        const newTodos = todos.filter((todo)=> {
            return !todo.completed
        })
        //更新后的对象重新设定到返回列表中
        setTodos(newTodos)
    }

    return (
        <div className="Study">
            <TodoList todoskey={todos} toggleTodo ={funToggleTodo}/>
            <input type="text" ref={todoNameRef}/>
            <button onClick={handleAddTodo}>Add</button>
            <button onClick={handleDelTodo}>Del</button>
            <div>
                count:{todos.filter((todo)=>{
                return !todo.completed
            }).length}
            </div>
        </div>
    );
}

export default Study;
