import React from 'react'
import {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";

export default function ToDoForm({todoInput, setTodoInput, todoDate, setTodoDate, todoProgress, setTodoProgress, todos, setTodos}) {
 
  const [values, setValues] = useState([]);
  
  /* function handleInputChange(event){
    setTodoInput(event.target.value);
  }

  function handleDateChange(event){
    setTodoDate(event.target.value);
  }

  function handleStatusChange(event){
    setTodoProgress(event.target.value);
  } */


  function handleInputChange(event){
    const {name, value} = event.target;
    setValues({...values, [name]: value,});
  };

  function onFormSubmit(event){
    event.preventDefault();      
    setTodos([...todos, {id: uuidv4(), values: values}]);
    setTodoInput('');
  }
  return (
    <div>ToDoForm
      <form className="todo-form" onSubmit={onFormSubmit}>
        <label name="title">Title:
          <input
              type="text"
              placeholder="Add a todo"
              name="todoText"
              className="todo-input"
              onChange = {handleInputChange}              
          />
        </label> <br/><br/>
        <label name="date"> Date:
          <input
              type="date"
              placeholder="dd.mm.yyyy"
              name= "todoDate"
              className="todo-date"
              onChange = {handleInputChange}
          />
        </label> <br/><br/>
        <label name="progress">Progress:
          <select name="todoStatus" id="progress" defaultValue="Choose the status" onChange = {handleInputChange}>
            <option value="in-progress">in-progress</option>
            <option value="done">done</option>
            <option value="not-started">not-started</option>
          </select>
        </label> <br/><br/>
        <button type="submit" className="todo-button" >SUBMIT</button>
      </form>
    </div>
  )
}