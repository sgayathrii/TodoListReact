import React from 'react'
import TodoForm from "./Form/TodoForm";

import {useState, useEffect} from "react";

export default function TodoList({todos, setTodos}) {

 
  const statusColor = (description) => {
    switch(description) {
      case "in-progress":
        return "blue";
      case "done" :
        return "green";
      case "not-started":
        return "red";
      default:
    }
  }

  function handleTodoDelete(itemId){

    const updatedTodo = [...todos].filter((todo) => {return todo.id !== itemId})
    setTodos(updatedTodo);
  }


  
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div className="todo-list">
            <li className="list-status" key={todo.id} style={{backgroundColor: `${statusColor(todo.values.todoStatus)}`}}>                  
          </li>
          <li className="list-text" key={todo.id}>
            {todo.values.todoText}                
          </li>
          <li className="list-date" key={todo.id}>
            {todo.values.todoDate}    
          </li>
          
          <button type="submit" onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          
          </div>
        )
                     
            
        )}
      </ul>
    </div>
  )
}


