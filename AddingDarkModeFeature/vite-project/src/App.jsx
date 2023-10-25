import React from "react"
import Navbar from "./Navbar.jsx"
import Mains from "./Mains.jsx"

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  
  return (
      <div className="container">
          <Navbar 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode}
          />
          <Mains darkMode={darkMode} />
      </div>
  )
}