import react from 'react';
import { useState, useEffect } from 'react';
function App() {

  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      console.log(res);
      let data = await res.json();
      console.log(data);
      setTodo(data);

    } catch (e) {
      console.log(e);

    } finally {
      setLoading(false);

    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <h1>data in table</h1>
      {loading ? (<h1>loading...</h1>) : (
        <table border="1" cellSpacing="1" cellPadding="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((val) => {
              return (
                <tr>
                  <td>{val.id}</td>
                  <td>{val.userId}</td>
                  <td>{val.title}</td>
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