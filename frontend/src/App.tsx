import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Games } from './screens/Game'
import { Landing } from './screens/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen bg-slate-950'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing></Landing>}></Route>
      <Route path='/games' element={<Games></Games>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
     </>
  )
}

export default App
