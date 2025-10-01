import { useState } from 'react'


function App() {
  const [color,setColor]= useState("skyblue")
 
  return (
    <>
 <div className='w-full h-screen ' style={{backgroundColor:color}}>
  <div className='fixed  bg-amber-600 flex gap-14 flex-wrap justify-center bottom-12  inset-x-0 px-2'>
    <button className='p-5 rounded-full ' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
    <button className='p-5 rounded-full' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
    <button className='p-5 rounded-full' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
    <button className='p-5 rounded-full' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>orange</button>
    <button className='p-5 rounded-full' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>purple</button>
    <button className='p-5 rounded-full' style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>pink</button>
<button className='outline-none p-4 rounded-full ' style={{backgroundColor:"red"}}>red</button>
      </div>
 </div>
    </>
  )
}

export default App
