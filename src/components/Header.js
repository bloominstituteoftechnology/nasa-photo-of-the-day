import React from "react"

const Header = () => {
    return (
        <div>
            <h1 className = "background">Space! Space! Space! Space!</h1>
            <nav className = "navbar">
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </nav>
        </div>
    )
}

export default Header