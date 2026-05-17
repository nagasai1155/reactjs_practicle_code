import react from 'react';
import {useState,useEffect} from 'react';

function FetchData(){
    const [todo,setTodo]=useState([]);
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null);

   const fetchMethod= async ()=>{

   try{
     let ans=await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
     if(!ans.ok) throw new Error("api failed")

     let res = await ans.json();
     setTodo(res);
     console.log(res);

   }catch(e){
    
   
    console.log(e.message);
   }finally{
    console.log("finally ");
    setLoading(false);
   }
 }

 useEffect(()=>{
    fetchMethod();
 },[])
   


    return(
        <>
        <h1>fetching data</h1>
        {loading?"loading":
        <table border="1" cellSpacing="4" cellPadding="11">
            <thead>
                <tr>
                    <th>userid</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                </tr>
            </thead>
            <tbody>
                
                    {todo.map((val,i)=>{
                        return <tr>
                            <td key={i}>{val.userId}</td>
                            <td key={i}>{val.id}</td>
                            <td key={i}>{val.title}</td>
                            <td key={i}>{val.completed ? "true" :"false"}</td>
                        </tr>
                              
                               
                    })}
            
            </tbody>
        </table>
        
        
        
        }
        </>
    )
}
export default FetchData;
