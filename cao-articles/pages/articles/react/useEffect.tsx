export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <Hoge />
         </>
    )
}

import { useState, useEffect } from 'react';

const Hoge = (props) => {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>The current count is {count}</p>
        <button onClick={() => setCount( count -1)}>-1</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count + 1 )}>+1</button>
      </div>
    )
}