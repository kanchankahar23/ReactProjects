import { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

function App() {
  const data = [
    { added:false,  song: "perfect", artist: "Ed Sheeran", Image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D" },
    { added:false,  song: "love story", artist: "Billie Eilish", Image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljfGVufDB8fDB8fHww" },
    { added:false,  song: "break free", artist: "Marshmello", Image: "https://plus.unsplash.com/premium_photo-1681503973709-0ab47cb4b114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWMlMjBhcnRpc3R8ZW58MHx8MHx8fDA%3D" },
    { added:false,  song: "feels like a prayer", artist: "Marshmello", Image:"https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww"},
    { added:false,  song: "stay", artist: "Marshmello", Image: "https://plus.unsplash.com/premium_photo-1682614339051-da1c6bb6a643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWMlMjBhcnRpc3R8ZW58MHx8MHx8fDA%3D" },
    { added:false,  song: "on the road", artist: "Marshmello", Image: "https://images.unsplash.com/photo-1690477554481-d8f79a4da0d0?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { added:true,  song: "sexy", artist: "Marshmello", Image: "https://media.istockphoto.com/id/1155368162/photo/beautiful-young-hipster-woman-with-curly-hair-with-red-guitar-in-neon-lights-rock-musician-is.webp?a=1&b=1&s=612x612&w=0&k=20&c=JxHL47vg5B-e84IH_H4YBJnpi1fgZr0ZVY1XrwxFo8k=" },

  ]
  const [song,setSong] = useState(data);

  const handleclick = (index) => {
  setSong((prev) =>{
    return prev.map((item, i) => {
      if(i === index){
        return {...item, added:!item.added }
      }
      return item
    })
  })  }

  return (
    <>
      <div className='w-full '>
        <Navbar data={song} />
      </div>
      <div className='px-20 flex-wrap flex gap-2 mt-10'>
        {song.map((item, index) => (
             <Card data={item} handleclick={handleclick} index={index}/>
        )
        )}
       
      </div>

    </>
  )
}

export default App
