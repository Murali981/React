import React from "react"
import Img1 from "./assets/phone-icon.png"
import Img2 from "./assets/mail-icon.png"

export default function Contact(props) {
    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={Img1} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={Img2} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

/* 
{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/