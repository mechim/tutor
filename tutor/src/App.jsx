import { useState } from 'react'
import Students from './pages/Students'
import './App.css'
import Lessons from './pages/Lessons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <Students/> */}
      <Lessons/>
    </>
  )
}

export default App
