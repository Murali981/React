import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

function App() {
  /**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize 
   * the state array with the same 2 items below
   * 
   * Don't worry about fixing `addItem` quite yet.
   */
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
  
  function addItem() {
      // We'll work on this next
      setThingsArray(prevThingsArray => {
          return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
      })
  }
  
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)  




















/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 

function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
  
  function addItem() {
      const newThingText = `Thing ${things.length + 1}`
      setThings(prevState => [...prevState, newThingText])
  }
  
  const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
  
  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
} */




