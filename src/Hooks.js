import react from 'react';
import { useState, useEffect } from 'react';
function Hooks() {
  const [todo, setTodo] = useState(0);
  useEffect(() => {
    console.log("hello")
  }, [todo])
  const submitHandler = (e) => {
    e.preventDefault();
    setTodo(todo + 1);
  }
  return (
    <>
      <div className='heaer'>
        <h2>understanding about useEffect</h2>

        <form>
          <h1>todo:{todo}</h1>

          <button type="submit" onClick={submitHandler}>click</button>

        </form>
      </div>

    </>
  )
}
export default Hooks;




