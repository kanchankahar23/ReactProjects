import React from 'react'

const Song = () => {
  const songList = [
    {
      title: 'you are the one',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Goal',
      description: 'Lor ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'enchanted',
      description: 'taylor swift dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'you are the one',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }
  ]

  const handledownload = () =>{
    alert("downloading");
  }

  return (
    <div className="grid grid-cols-1 w-96 gap-4">
      {songList.map((song, index) => (
        <div
          key={index}
          className="w-full p-4 bg-zinc-100 rounded-lg shadow-lg"
        >
          <h1 className="font-bold">{song.title}</h1>
          <p className="mt-2">{song.description}</p>
          <button onClick={handledownload} className='mt-40 bg-blue-400 rounded text-white p-11'>Download now</button>
        </div>
      ))}
    </div>
  )
}

export default Song
