import React from 'react'
import {useState, useEffect} from "react";


export default function ToDoForm() {

  const {todoInput, settodoInput} = useState([]);
  const {todoDate, settodoDate} = useState([]);

  return (
    <div>ToDoForm
      <form classNmae="todo-form">
        <label name="title">Title:
          <input 
              type="text" 
              placeholder="Add a todo" 
              value={todoInput} 
              name="todoText"
              className="todo-input" 
          />
        </label> <br/>
        <label name="date"> Date: 
          <input 
              type="date"
              placeholder="dd.mm.yyyy"
              value = {todoDate}
              name= "todoDate"
              className="todo-date"
          />
        </label> <br/>
        <label name="progress">Progress:
          <select name="todoStatus" id="progress">
            <option value="choose" disabled selected>Choose the Status</option>
            <option value="in-progress">in-progress</option>
            <option value="done">done</option>
            <option value="not-started">not-started</option>
          </select>
        </label> <br/>
      </form>

    </div>
  )
}
