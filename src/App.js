import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  //参数[todos]是Object
  const [todos, setTodos] = useState(["Todo1","Todo2"]);
  return (
    <div className="App">
      Hello,World!      
      <TodoList todoskey={todos}/>
      <input type="text"/>
      <button>Add</button>
      <button>Del</button>
      <div>
        count:0
      </div>
    </div>
  );
}

export default App;
