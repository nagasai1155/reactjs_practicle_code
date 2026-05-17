import React, { useEffect, useState } from 'react';

function Inter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Render ');
    setCount(2);
  }, [count]);

  // setCount(1);
  console.log(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Timer {count} </p>
    </div>
  );
}
export default Inter;