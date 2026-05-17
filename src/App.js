import React from 'react'
import {useState,useEffect} from 'react';

 const App = () => {
  let[todo,setTodo]= useState([])
  let[loading,setLoading]=useState(true);


  const fetchData = async()=>{

    try{
    let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    let data =await res.json();
    console.log("data",data);
    setTodo(data);

    }catch(e){
      console.log("error")
    }finally{
      setLoading(false);
    }


  }

  useEffect(()=>{
    fetchData();
  },[]);


  return (
    <>

    <h1>data fetching from an api</h1>
    {loading?(
      <h1>loading...</h1>
    ):(
      <table  border="1" cellPadding="8" cellSpacing="0">
        <thead>
         <tr>
           <th>ID</th>
          <th>USER ID</th>
          <th>Title</th>
          <th>completed</th>
       
         </tr>
         </thead>
         <tbody>
          {todo.map((val)=>{
          return(
             <tr>
             <td>{val.id}</td>
              <td>{val.userId}</td>
              <td>{val.title}</td>
              <td>{val.completed?"yes":"no"}</td>
           </tr>
          )
          })}
         </tbody>
      </table>
    )}
    
    
    </>
  )
}
export default App;
