import react from 'react';
import {useState} from 'react';
import "./App1.css";
function App1(){
  const [count,setCounter]=useState(0);
  const [list,setList]=useState([]);
  const [asc,setAsc]=useState(true);


  function addToList(){
     setList([...list,count]);
     setCounter(0);
  }

  function sorting(){
    let newsorts=[...list].sort((a,b)=>{
      return asc?a-b:b-a
    })
    setList(newsorts)
    setAsc(!asc);
  }

  return(
    <>
        <h1 className="app1">counter app </h1>
         <div className="app1">
          <button onClick={()=>setCounter(count-1)}>-</button>
          <h1><span>{count}</span></h1>
          <button onClick={()=>setCounter(count+1)}>+</button>

          <button onClick={addToList}>add</button>
          <button onClick={sorting}> sort {asc?"asc":"desc"} </button>

<ul>
    {
      list.map((val,i)=>{
           return <li key={i}>{val}</li>
      })
    }
</ul>
         </div>

    </>
  )
}
export default App1;