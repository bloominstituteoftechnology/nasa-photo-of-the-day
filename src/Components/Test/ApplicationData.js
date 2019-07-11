import React from 'react';

function ApplicationData(props){
    return(
        <div>
            <div>
                <h1>{props.ele.title}</h1>
                <h6>{props.ele.date}</h6>
                {/*WIll add Image here later*/}

            </div>
        </div>
    )
}

export default ApplicationData;