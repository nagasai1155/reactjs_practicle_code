import React from 'react';
import { useState } from 'react';
import './TodoApp.css'

function TodoApp() {
    const [task,setTask]=useState("");
    const [tasks,setTasks]=useState([])

    function addTask(e){
        e.preventDefault();
        setTasks([...tasks,task])
        setTask(" ");
    }

    function deleteTasks(index){
        const newTasks=tasks.filter((item,i)=>i !==index);
        setTasks(newTasks);
    }
    
  return (
    <>
      <div className="container">
        <h1>Todo application</h1>
        <form onSubmit={addTask}>
            <input type="text" placeholder="enter task" onChange={(e)=>{
                setTask(e.target.value)
            }} value={task}/>

            <button type="button" onClick={addTask}>add</button>
        </form>
        <div className="container">
            <ul>
            {tasks.map((val,i)=>{
                return <li key={i}>{val} 
                <button onClick={()=>deleteTasks(i)}>x</button>
                </li>
            })}
        </ul>
        </div>
      </div>
    </>
  );
}

export default TodoApp;