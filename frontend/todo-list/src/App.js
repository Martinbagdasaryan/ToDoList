import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./Registration";
import Login from "./Login";
import ToDoList from "./ToDoList"; 

function App() {
   return (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/todolist" element={<ToDoList />} />
      <Route path="/registration" element={<Register />} />
    </Routes>
  </Router>
);
}

export default App;
