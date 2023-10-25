import React from "react"

export default function App() {
  const [isGoingOut, setIsGoingOut] = React.useState(true)
  /**
   * Challenge: 
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the div.state--value flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */
  function changeMind() {
      setIsGoingOut(prevState => !prevState)
  }
  
  return (
      <div className="state">
          <h1 className="state--title">Do I feel like going out tonight?</h1>
          <div onClick={changeMind} className="state--value">
              <h1>{isGoingOut ? "Yes" : "No"}</h1>
          </div>
      </div>
  )
}


/*

export default function App() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     
    const isGoingOut = true
    // let answer = isGoingOut === true ? "Yes" : "No"
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
} */

