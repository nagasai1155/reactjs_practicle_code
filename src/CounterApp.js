import react from 'react';
import {useState} from 'react'

const CounterApp=()=>{
    const [counter,setCounter]=useState(0)
    const [list,setList]=useState([])
    const [asc,setAsc]=useState(true);

    function addList(){
        setList([...list,counter])
        setCounter(0)
    }

    const sortfunction=()=>{
        let newsorts = [...list].sort((a,b)=>{
            return asc?a-b:b-a
        })
        setList(newsorts);
    }

    return(
        <>
        <h1>counter app</h1>
        <button onClick={()=>{
            setCounter(counter-1)
        }}>-</button>
        <h1>{counter}</h1>
        <button onClick={()=>{
            setCounter(counter+1)
        }}>+</button>
        <button onClick={()=>{
            addList()
        }}>add</button>

        <button onClick={sortfunction}>sort {asc?"asc":"dsc"}</button>

        <ul>
            {list.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>
        
        </>
    )
}
export default CounterApp;