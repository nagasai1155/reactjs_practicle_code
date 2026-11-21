import React from 'react'
import Second from '../props/Second.js'
import Third from "../props/Third.js"
const First = () => {
    let array={
        arr:[1,2,3,4],
        text:"hello this word"
    }
    let res="This is practicing of the props concept";
  return (
   <>
    
    <Second {... array}  ></Second>
   </>
  )
}

export default First