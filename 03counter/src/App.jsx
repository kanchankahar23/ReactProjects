import { useState } from 'react'
function App(){
  const [count ,setCount] =useState(0);
  const increase = () =>setCount(count + 1);
  const decrease = () =>setCount(count -1);
  const reset = () =>setCount(0);
  return(
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Increse</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App;