import React from 'react'

function Card({value}) {
  const addfriend = () =>{
    // Add friend logic here
    alert('Friend added successfully!')
  }
  
  const {name,profession, img} = value
 
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
     <div className='w-full h-32 bg-sky-200'>
        <img className='w-full h-full object-cover object-center' src={img} />
      </div>
      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold '>{name}</h3>
        <h5 className='text-xs'>{profession}</h5>
        <button onClick={addfriend} className='mt-4 px-3 py-1 text-xs text-white bg-blue-700 font-semibold rounded-md '>Add Friend</button>
      </div>
    </div>
  )
}

export default Card;