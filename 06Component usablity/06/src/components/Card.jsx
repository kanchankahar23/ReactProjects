import React from 'react'

const Card = () => {

    const card = [
        {
            Image: "https://images.unsplash.com/photo-1758591761652-403d10e27718?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Nature",
            description: "nature vel efficitur neque. Quisque efficitur consectetur mi, at malesuada erat finibus in."

        },
        {
            Image: "https://images.unsplash.com/photo-1741332966007-c795f680015e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
            title: "bold",
            description: "bold vel efficitur neque. Quisque efficitur consectetur mi, at malesuada erat finibus in."
        },
        {
            Image: "https://plus.unsplash.com/premium_photo-1737836420070-e3ee9611d50c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
            title: "view",
            description: "view vel efficitur neque. Quisque efficitur consectetur mi, at malesuada erat finibus in."

        }

    ]


    return (
        <>
            <div className='flex justify-center items-center gap-10 flex-row '>
                {card.map((elem, index) => {
                    return (


                        <div className='w-60 h-56 rounded-2xl bg-zinc-500 '>
                            <img src={elem.Image} alt='nature' className='' />
                            <h1 className='font-bold'> {elem.title}</h1>
                            <p className='pt-10'>{elem.description}</p>
                        </div>

                    )
                })}
            </div>


        </>
    )
}


export default Card