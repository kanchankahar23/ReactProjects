import React, { useState } from 'react'

function App() {
  // array
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [val2, setVal2] = useState([10, 11, 12, 13, 14, 15, 16, 17, 18]);
  // object
  const [item, setItem] = useState({ name: "kanchan", age: 22 });
  return (

    <div className='p-20'>
      {val.map((item) => <h1>{item}</h1>)}
      <button onClick={() => {
        setVal(() => {
          return val.filter((item, index) => index != val.length - 1)
        })
      }} className='px-3 py-1 rounded-full bg-blue-600 text-white'>click me</button>


      {val2.map((item) => <h1>{item}</h1>)}
      <button onClick={() => {
        setVal2(() => {
          return val2.filter((item, index) => index % 2 == 0)
        })
      }}
        className='px-3 py-1 rounded-full bg-red-600 text-white'>EVEN</button>

      {item.name} - {item.age}
    </div>
  )
}

export default App