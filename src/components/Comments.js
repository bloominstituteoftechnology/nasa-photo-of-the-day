import React from 'react';

export default function Comments(props){
        const { profiles } = props;
    return(
        <div className="profile">
            <img src={img} />
            <div>
                <h2>{name}</h2>
                <p>{comment}</p>
            </div>
        </div>
    )
}