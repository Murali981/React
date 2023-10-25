import React from "react"

export default function Joke(props) {
    return (
        <div>
            <h3>{props.punchline}</h3>
            <p>{props.setup}</p>
            <hr />
        </div>
    )
}