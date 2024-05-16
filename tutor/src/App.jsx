import { useState } from 'react'
import Students from './pages/Students'
import './App.css'
import Lessons from './pages/Lessons'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (

      <Router>
        <Routes>
          <Route path='/students' element={<Students/>}/>
          <Route path='/lessons' element={<Lessons/>}/>
        </Routes>
      </Router>
  )
}

export default App
