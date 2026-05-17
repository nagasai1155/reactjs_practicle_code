import react from 'react';
import {useState,useEffect} from 'react';

function LoadingState(){
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState([])
    const [error,setError]=useState(null)
//     async function fetchData() {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const data = await res.json();
//       setData(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(()=>{
//      fetchData()    
//   },[])
useEffect(()=>{
    setTimeout(()=>{
        const nums=["apple",2,"mango"]
setData(nums);
setLoading(false);
    },2000)
},[])

    return(
        <>
        {loading?("loading..."):(data.map((val,i)=>{
           return <h1 key={i}>{val}</h1>
        }))}
        </>
    )
}
export default LoadingState;