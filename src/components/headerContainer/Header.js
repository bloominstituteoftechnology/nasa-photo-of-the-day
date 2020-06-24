import React from "react"
import "./Header.css"

const Header = () => {
    return (
        <div className="date-wrapper">
            <div className="left-arrow">{`<-`}</div>
            <div className="date">June 23</div>
            <div className="right-arrow">{`->`}</div>
        </div>
    )
}

export default Header