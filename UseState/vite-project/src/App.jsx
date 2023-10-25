import React from "react"
import Count from "./Count.jsx"

export default function App() {
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    /**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count number={count} />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

/*
export default function App() {
  const [count, setCount] = React.useState(0)
  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.

  function add() {
      setCount(prevCount => prevCount + 1)
  }
  // Challenge: update `substract` to use a callback function
  
  function subtract() {
      setCount(prevCount => prevCount - 1)
  }
  
  return (
      <div className="counter">
          <button className="counter--minus" onClick={subtract}>–</button>
          <div className="counter--count">
              <h1>{count}</h1>
          </div>
          <button className="counter--plus" onClick={add}>+</button>
      </div>
  )
} */




















/*
export default function App() {
  /**
   * Challenge: 
   * Add functionality to the minus button
  
  const [count, setCount] = React.useState(0) // [count , setCount] --> This is array destructuring as useState() return an array where
  // the first value is the value of the state and the second value is the function() , here the function is the setCount() function.
  
  function add() {
      setCount(count + 1)
  }
  
  function subtract() {
      setCount(count - 1)
  }
  
  return (
      <div className="counter">
          <button className="counter--minus" onClick={subtract}>–</button>
          <div className="counter--count">
              <h1>{count}</h1>
          </div>
          <button className="counter--plus" onClick={add}>+</button>
      </div>
  )
}  */












/*
export default function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     
    
    function handleClick() {
        setIsImportant("No")
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}  */











/*
export default function App() {
  /**
   * Challenge: Replace our hard-coded "Yes" on the page with 
   * some state initiated with React.useState()
  const result = React.useState("Yes")
  //console.log(result)
  return (
      <div className="state">
          <h1 className="state--title">Is state important to know?</h1>
          <div className="state--value">
              <h1>{result[0]}</h1>
          </div>
      </div>
  )
} */
