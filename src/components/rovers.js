import React from 'react'

export default function(props){
    const {curiosity, opportunity, spirit} = props


    return (
        <div>
            <div>
            <img src={curiosity.img_src}></img>
            {console.log(curiosity)}
            </div>
            <div>
            <img src={opportunity.img_src}></img>
            {console.log(opportunity)}
            </div>
            <div>
            <img src={spirit.img_src}></img>
            {console.log(spirit)}
            </div>
        
        </div>
    )
}



































































