import { useState } from 'react'
import './App.css'

function App() {
  const [Color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : Color}}>
        <div className='flex flex-wrap justify-items-center'>
          <button className='px-4 border m-4 bg-red-600 rounded-lg' onClick={()=>setColor('red')}>red</button>
          <button className='px-4 border m-4 bg-blue-600 rounded-lg' onClick={()=>setColor('blue')}>blue</button>
          <button className='px-4 border m-4 bg-green-600 rounded-lg' onClick={()=>setColor('green')}>green</button>
          <button className='px-4 border m-4 bg-yellow-400 rounded-lg' onClick={()=>setColor('yellow')}>yellow</button>
        </div>
    </div>
  )
}

export default App
