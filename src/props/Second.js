import React from 'react'

const Second = (props) => {
  return (
    <>
    <h1>{props.text}</h1>
    <ul>
        {props.arr.map((val,i)=>{
            return <li key={i}>{val}</li>
        })}
    </ul>

    </>
  )
}

export default Second