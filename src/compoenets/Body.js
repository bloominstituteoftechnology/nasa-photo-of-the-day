import React from "react"

const Text = function (props) {
    const { info, imgg } = props
    return (
        <div>
            <img src={imgg} />
            <div>
                <h3>Info</h3>
                <p>{info}</p>
            </div>
        </div>)
}

export default Text;