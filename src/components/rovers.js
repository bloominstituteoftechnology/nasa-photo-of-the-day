import React from 'react'
import styled from 'styled-components'

const Rovers = styled.div `
* {
    box-sizing: border-box;
}
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
}
.container div{
    width: 33%;
}
img{
    width: 100%;
}
`

export default function(props){
    const {curiosity, opportunity, spirit} = props


    return (
        <Rovers>
            <h2>Rover Cams</h2>
            <div class="container">
                <div>
                    <img src={curiosity.img_src}></img>
                    {/* {console.log(curiosity)} */}
                </div>
                <div>
                    <img src={opportunity.img_src}></img>
                    {/* {console.log(opportunity)} */}
                </div>
                <div>
                    <img src={spirit.img_src}></img>
                    {/* {console.log(spirit)} */}
                </div>
            </div>
        </Rovers>
    )
}



































































