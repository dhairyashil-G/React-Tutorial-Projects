import React from "react"

export default function Info(){
    return(
        <div className="Info">
            <img src="src/profile-pic.jpg" className="profile-pic"/>
            <h1 className="main-text">Dhairyashil</h1>
            <h4 className="designation-text">Full Stack Developer</h4>
            <h5 className="website-url">dhairyashil.website</h5>
            <div className="buttons-div">
                <button className="Email "><img src="/src/email-logo.png" className="email-logo"/>  Email</button>
                <button className="LinkedIn "><img src="/src/linkedin-logo.png" className="linkedin-logo"/>LinkedIn</button>
            </div>
        </div>
    )
}