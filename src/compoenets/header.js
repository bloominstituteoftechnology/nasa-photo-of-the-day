import React from 'react'



const Head = function (props) {
    const { date, title } = props
    return (
        < div >
            < h1 > Behold Tomorrow</h1 >
            <div>
                <h2>{title}</h2>
                <p>Nasa Photo Of The day {date}</p>
            </div>
        </div >)
}

export default Head;