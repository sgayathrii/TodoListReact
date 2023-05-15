import './App.css';
import {useState, useEffect} from "react";

import TodoForm from "./components/Form/TodoForm";
import TodoList from "./components/TodoList";


function App() {

  const [todoInput, setTodoInput] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoProgress, setTodoProgress] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm 
        todoInput ={todoInput}
        setTodoInput = {setTodoInput}
        todoDate ={todoDate}
        setTodoDate = {setTodoDate}
        todoProgress ={todoProgress}
        setTodoProgress = {setTodoProgress}
        todos ={todos}
        setTodos = {setTodos}      
      />
      <TodoList 
        todos ={todos}
        setTodos = {setTodos}  
      />
    </div>
  )
}

export default App;
