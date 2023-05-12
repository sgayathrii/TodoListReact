import './App.css';
import {Routes, Route} from "react-router-dom";

import TodoForm from "./components/Form/TodoForm";


function App() {
  return (
    <div className="App">
      <TodoForm/>
    </div>
  )
}

export default App;
