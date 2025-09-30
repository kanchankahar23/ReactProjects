import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(2)
  const increment = () => {
    setCount(count + 1)
  }

  const [val, setVal] = useState({ name: "jo", age: 22 })
  const [name, setName] = useState({"name":"rose","age":22,isbanned:false});
    return (
    <div className='p-20'>
      <h1 className='font-bold'>{count}</h1>
      <button onClick={increment} className='px-3 py-1 bg-blue-600 rounded-full text-white'>click me </button>
      <p className='text-gray-900'>This is a simple React application using useState hook.</p>

    <h1>Name:  {val.name}</h1>
    <h1>Age : {val.age}</h1>

  <button onClick={()=>{
    setVal({...val, age: val.age + 1})
  }} className='px-3 py-1 bg-blue-300 rounded-full  '>Click me again</button>


<h1>name: {name.name}</h1>
<h1> age: {name.age}</h1>
<h1>isbanned: {name.isbanned.toString()}</h1>
  
  <button onClick={()=>{
    setName({...name,name:"kanchan",
      isbanned:!name.isbanned
    })

  }} className={`px-4 py-1 rounded-full text-white ${name.isbanned ? "bg-blue-900" :"bg-red-900"}`}>change</button>



    </div>
  )
}

export default App