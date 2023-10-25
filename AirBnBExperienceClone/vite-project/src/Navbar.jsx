import React from "react"
import Img1 from "../public/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Img1} className="nav--logo"/>
        </nav>
    )
}