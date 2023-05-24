import React from 'react'
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export default function ToDoForm({todos, setTodos}) {
 
  const [values, setValues] = useState({todoText:"", todoDate:"", todoStatus:"" });
  
  function handleInputChange(event){
    const {name, value} = event.target;
    setValues({...values, [name]: value,});
  };

  function onFormSubmit(event){
    event.preventDefault();      
    
    if(values.todoDate !=="" || values.todoText !=="" || values.todoStatus !== ""){      
      setTodos([...todos, {id: uuidv4(), values: values}]);
      setValues({
        todoText:"",
        todoDate: "",
        todoStatus:""
      });       
    } 
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
              value={values.todoText}             
          />
        </label> <br/><br/>
        <label name="date"> Date:
          <input
              type="date"
              placeholder="dd.mm.yyyy"
              name= "todoDate"
              className="todo-date"
              onChange = {handleInputChange}
              value={values.todoDate}
          />
        </label> <br/><br/>
        <label name="progress">Progress:
          <select name="todoStatus" id="progress" onChange = {handleInputChange} value={values.todoStatus}>
            <option value="status">Choose the Status</option>
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