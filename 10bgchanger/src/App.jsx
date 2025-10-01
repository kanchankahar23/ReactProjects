import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("pink")
  return (
    <div className='w-full h-screen flex justify-center items-center' style={{ backgroundColor: color }}>
      <div className='fixed bg-amber-950 flex flex-wrap justify-center text-white gap-10 w-[80%] h-12 items-center'>
        <button onClick={() => setColor("red")} className=' p-8 rounded-2xl   bg-red-600' style={{ backgroundColor: "red" }}>red</button>
        <button onClick={() => setColor("green")} className=' p-8 rounded-2xl   bg-green-600' style={{ backgroundColor: "green" }}>green</button>
        <button onClick={() => setColor("black")} className=' p-8 rounded-2xl   black' style={{ backgroundColor: "black" }}>black</button>
        <button onClick={() => setColor("orange")} className=' p-8 rounded-2xl   bg-orange-600' style={{ backgroundColor: "orange" }}>oraneg</button>
        <button onClick={() => setColor("yellow")} className=' p-8 rounded-2xl   bg-yellow-600' style={{ backgroundColor: "yellow" }}>yellow</button>
        <button onClick={() => setColor("blue")} className=' p-8 rounded-2xl   bg-blue-600' style={{ backgroundColor: "blue" }}>blue</button>
        <button onClick={() => setColor("pink")} className=' p-8 rounded-2xl   bg-pink-600' style={{ backgroundColor: "pink" }}>pink</button>
        <button onClick={() => setColor("purple")} className=' p-8 rounded-2xl   bg-purple-600' style={{ backgroundColor: "purple" }}>purple</button>
        <button onClick={() => setColor("frozen")} className=' p-8 rounded-2xl   bg-teal-600' style={{ backgroundColor: "teal" }}>frozen</button>

      </div>

    </div>
  )
}

export default App