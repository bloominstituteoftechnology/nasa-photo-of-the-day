import React from "react"
import styled from "styled-components";

//styles
const WrapperDiv = styled.div`
    display:  flex;
    flex-direction:column;
    width: 50vw;
    align-items: center;
    justify-content: center;

`;
const Image = styled.img`
width: 50%;
border-radius: 5px;
`;

const Title = styled.h2`
font-size: 1.5rem;
`;

const ApodCard = props => {
    // console.log(props);
   

    return (
 
        <WrapperDiv>
         <Title>{props.title}</Title>
          {/* <h2>{props.title}</h2> */}
          <p>{props.date}</p>
          <div
            className="content"
            style={{
              width: "100%",
            }}
          >
            <Image src={props.image} alt={props.title} />
            {/* <img
              src={props.image}
              alt="{props.title}"
              style={{
                width: "50%",
                borderRadius: "5px",
              }}
            /> */}
            <p
              style={{
                width: "100%",
              }}
            >
              {props.exp}
            </p>
          </div>
        </WrapperDiv>
    
    );
};

export default ApodCard;