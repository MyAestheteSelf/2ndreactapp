import "./App.css";
import React, { useState, initState } from "react";
import { NavBar } from "./MyComponents/NavBar";
import { Todos } from "./MyComponents/Todos";
import { AddTask } from "./MyComponents/AddTask";
import { About } from "./MyComponents/About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const addTask = (title, desc) => {
    let sno;
    if (tasks.length === 0) {
      sno = 0;
    } else {
      sno = tasks[tasks.length - 1].sno + 1;
    }
    let myTask = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log(myTask);
    setTasks([...tasks, myTask]);
    sessionStorage.setItem("todos", JSON.stringify(tasks));
  };
  const onDelete = (taskToBeDeleted) => {
    setTasks(
      tasks.filter((e) => {
        return e !== taskToBeDeleted;
      })
    );
  };
  const [tasks, setTasks] = useState([]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={()=>{
          return(<>
          <NavBar hasName={true} title="BrandName" />
          <AddTask addTask={addTask} />
          <Todos todos={tasks} onDelete={onDelete} />
          </>)
        }}>
        </Route>
        <Route exact path="/About" render={()=>{
          return <>
          <NavBar hasName="false" />
          <About />
          </>
        }}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
