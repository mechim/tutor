import { useState, createContext, useEffect } from 'react'
import Students from './pages/Students'
import './App.css'
import Lessons from './pages/Lessons'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

export const Context = createContext();

function App() {
  const [students, setStudents] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [theme, setTheme] = useState(() => {
    // Load the theme from local storage if available, otherwise default to light theme
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    const gotStudents = JSON.parse(localStorage.getItem('students'));
    if (gotStudents)
      setStudents(gotStudents);

    const gotLessons = JSON.parse(localStorage.getItem('lessons'));
    if (gotLessons)
      setLessons(gotLessons);

    console.log(theme);
  }, [])
  useEffect(() => {
      if (lessons?.length)
        localStorage.setItem('lessons', JSON.stringify(lessons));
  }, [lessons])

  useEffect(() => {
    if (students?.length)
      localStorage.setItem('students', JSON.stringify(students));
  }, [students])

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  return (
      <Context.Provider value={{students, setStudents,lessons, setLessons, theme, setTheme}}>
        <Router>
          <Routes>
            <Route path='/students' element={<Students/>}/>
            <Route path='/' element={<Lessons/>}/>
          </Routes>
        </Router>
      </Context.Provider>
  )
}

export default App
