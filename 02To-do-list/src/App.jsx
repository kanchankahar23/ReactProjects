import { useState } from 'react'
function App(){
  const [task,setTask] = useState('');
  const [todos,setTodos] = usestate([]);
  const addTodo = () =>{
    if(task.trim() !== ''){
      setTodos([...todos,{text : task,completed:false}]);
    }
  };
  const toggleComplete = (index) =>{
    const updatedTodos = [...todos];
    updatedTodos[index].completed = ! updatedTodos[index].completed;
  setTodos(updatedTodos);
  }
  const deleteTodo = (index) =>{
    const updatedTodos = todos.filter((_ ,i)=> i !== index);
    setTodos(updatedTodos)
  };

}
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
          <h1>MY TODO LIST</h1>
          <div className='input'>
            <input 
            type='text'
            placeholder='Enter a task....'
            value={task}
           onChange={(e)=> setTask(e.target.value)}/>
           <button onClick={appTodo}>Add</button>          
          </div>
    </div>
    </>
  )
}

export default App
