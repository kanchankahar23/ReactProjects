import React, { useState } from 'react'
import Card from './components/Card'

const data = [

  {
    name: "john", profession: "painter", friends: false, img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "amit", profession: "dancer", friends: false, img: "https://images.unsplash.com/photo-1570158268183-d296b2892211?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww"
  },
  {
    name: "sumit", profession: "artist", friends: false, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "rose", profession: "coding ", friends: false, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww"
  }
];
const[realdata,setRealdata] = useState(data)
function App() {
  return (

    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center gap-4 '>
      {realdata.map((person, index) => (
        <Card value={person} />
      ))}
    </div>
  )
}

export default App