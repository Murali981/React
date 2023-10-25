import React from "react"
import boxes from "./boxes.jsx"
import Box from "./Box.jsx"

export default function App() {
  const [squares, setSquares] = React.useState(boxes)
  
  function toggle(id) {
      setSquares(prevSquares => {
          return prevSquares.map((square) => {
              return square.id === id ? {...square, on: !square.on} : square
          })
      })
  }
  
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          id={square.id}
          on={square.on} 
          toggle={toggle}
      />
  ))
  
  return (
      <main>
          {squareElements}
      </main>
  )
}


























/*
export default function App() {
  const [squares, setSquares] = React.useState(boxes)
  
  function toggle(id) {
      /**
       * Challenge: use setSquares to update the
       * correct square in the array.
       * 
       * Make sure not to directly modify state!
       * 
       * Hint: look back at the lesson on updating arrays
       * in state if you need a reminder on how to do this
      
      setSquares(prevSquares => {
          const newSquares = []
          for(let i = 0; i < prevSquares.length; i++) {
              const currentSquare = prevSquares[i]
              if(currentSquare.id === id) {
                  const updatedSquare = {
                      ...currentSquare,
                      on: !currentSquare.on
                  }
                  newSquares.push(updatedSquare)
              } else {
                  newSquares.push(currentSquare)
              }
          }
          return newSquares
      })
  }
  
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          id={square.id}
          on={square.on} 
          toggle={toggle}
      />
  ))
  
  return (
      <main>
          {squareElements}
      </main>
  )
} */


/*  Challenge is whenever you clicked on any square it has to retrieve the id of that square , for example
in the below there are six squares , Therefore if you have clicked on any of the six squares it has to retrieve the 
id's of the squares from 1 to 6...
export default function App() {
  const [squares, setSquares] = React.useState(boxes) 
  
  function toggle(id) {
      console.log(id)
  }
  
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          id={square.id}
          on={square.on} 
          toggle={toggle}
      />
  ))
  
  return (
      <main>
          {squareElements}
      </main>
  )
} */


















/*
export default function App() {
  const [squares, setSquares] = React.useState(boxes)
  
  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   * 
   * Pass that function down to each of the Box components
   * and set it up so when they get clicked it runs the function
  
  
  function toggle() {
      console.log("Clicked!")
  }
  
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          on={square.on} 
          toggle={toggle}
      />
  ))
  
  return (
      <main>
          {squareElements}
      </main>
  )
} */




/*
export default function App() {
  const [squares, setSquares] = React.useState(boxes)
  
  const squareElements = squares.map(square => (
      <Box key={square.id} on={square.on} />
  ))
  
   * Challenge part 2:
   * 1. Create a separate component called "Box" and
   *    replace the `div` above with our <Box /> components
   * 2. Pass the Box component a prop called `on` with the
   *    value of the same name from the `boxes` objects
   * 3. In the Box component, apply dynamic styles to determine
   *    the backgroundColor of the box. If it's `on`, set the
   *    backgroundColor to "#222222". If off, set it to "none"
   
  
  return (
      <main>
          {squareElements}
      </main>
  )
} */








/*
export default function App(props) {
  const [squares, setSquares] = React.useState(boxes)
  
  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  }
  
  const squareElements = squares.map(square => (
      <div style={styles} className="box" key={square.id}></div>
  ))
  return (
      <main>
          {squareElements}
      </main>
  )
}

 export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <div className="box" key={square.id}></div>
    ))
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     
    return (
        <main>
            {squareElements}
        </main>
    )
} */