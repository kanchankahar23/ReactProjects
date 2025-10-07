import { useRef, useState } from 'react'


function App() {
  const [val, setVal] = useState({ name: "" })
  const name = useRef("null");
  const age = useRef("null");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(val)
  }
  console.log(name.current.value, age.current.value)
  return (
    <>
      <input type='text' ref={name} placeholder='Enter your name' />
      <input type='number' ref={age} placeholder='Enter your age' />
      <input type='submit' value='Submit' onClick={handlesubmit}></input>
      <div>
        <form onSubmit={handlesubmit}>
          <input onChange={(e) => setVal({ ...val, name: e.target.current })} type='text' placeholder='enter the name '></input>
          <input onChange={(e) => setVal({ ...val, name: e.target.current })} type='text' placeholder='enter the name '></input>
          <input type="submit"></input>
        </form>
      </div>
    </>
  )
}

export default App
