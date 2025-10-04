import React from 'react'

function Navbar({ data }) {
    return (
        <div className='w-full p-10  flex justify-between  items-center'>
            <h1 className='text-orange-600 font-bold text-3xl'>Orange</h1>
            <div className='flex gap-3 p-2 rounded-md font-semibold bg-orange-500 text-white '>
                <h1>Favrouites</h1>
                <h2>{data.filter(item => item.added).length}</h2>

            </div>
        </div>
    )
}

export default Navbar