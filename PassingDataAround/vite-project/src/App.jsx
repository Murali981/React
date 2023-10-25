import React from "react"
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import './App.css'


export default function App() {
  const [user, setUser] = React.useState("Joe")
  
  return (
      <main>
          <Header user={user} />
          <Body user={user} />
      </main>
  )
}
