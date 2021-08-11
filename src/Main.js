import React from 'react';

function Main(props){
    const { image } = props;

    return(
        <div>
            <img src={`${image}`} />
        </div>
    )
}





export default Main;