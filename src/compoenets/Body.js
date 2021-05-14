import React from "react"
import styled from "styled-components"

const Styledtext = styled.div`
width: 45%
  display: flex;
  justify-content : space-between;
  padding: 8px;
  border: 5px solid khaki;
  background-color:${props => props.theme.primaryColor};
  
`
const Styledimg = styled.img`
width:45%
`
const Styledinfo = styled.p`
margin:5%;
color:   ${props => props.theme.secondaryColor}}

&:hover {
    transition: all 2.2s ease-in-out;
    color: ${props => props.theme.tertiaryColor};
  }

`
const Text = function (props) {
    const { info, imgg } = props
    return (
        <Styledtext>
            <Styledimg src={imgg} />
            <div>
                <h3>Info</h3>
                <Styledinfo>{info}</Styledinfo>
            </div>
        </Styledtext>
    )
}

export default Text;