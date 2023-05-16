import './App.css';
import {useState, useEffect} from "react";

import TodoForm from "./components/Form/TodoForm";
import TodoList from "./components/TodoList";

// attach each parts/ components

// how many states ???

// form => onChange

// get each todoItem ( what is the data shape?)
// {
 // title:title
 // date: date
 // progress: status
//}

// display todoItem

// display todoList ( what is the date shape?) []

// todoList:[todoItem, todoItem, toDoItem]

// toDoList: [{}, {} {}] array method: map

// delete todoItem

// Styling: color

function App() {

  const [todoInput, setTodoInput] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todoProgress, setTodoProgress] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm 
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

