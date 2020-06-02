import React from "react";

function MainContent(props) {
    console.log(props.dataArray)
    return(
        <div>
            <div>
                <img 
                    alt='astronmy photo'
                    className='NasaImg'
                    src={props.dataArray.url}
                    />
            </div>
           <p>{props.dataArray.explanation}</p>
        </div>
    )
}

export default MainContent