import React from 'react'

function Card({ data, handleclick , index}) {
    const { song, artist, added, Image } = data
    return (

        <div className='w-72 h-full bg-zinc-100 p-2 m-2 rounded-2xl '>
            <div className='flex text-center '>
                <div className='w-20 h-20 bg-orange-500 rounded-md overflow-hidden'>
                    <img src={Image} alt='song' className='w-full h-full object-cover object-center' />
                </div>
                <div className='p-5'>
                    <h1 className='text-xl font-bold'>{song}</h1>
                    <h3>{artist}</h3>
                </div>
            </div>

            <button onClick={()=>handleclick(index)} className={`px-5 py-1 m-2 ml-10 ${added ? "bg-teal-800" : "bg-orange-500"} rounded-2xl text-white font-bold`}>{added === true ? "Added" :
                "Add to favroouite"}</button>
        </div>

    )
}

export default Card