import React,{useState} from "react";
import styled from "styled-components";

// background-color:rgb(240, 226, 243);

export default function NasaImagecard(props) {
  const [showExplanation, setShowExplanation] = useState(false);
  const toggle = () => {
    return setShowExplanation(!showExplanation);
  };
    
     return (
    <DivStyled className="nasa-card" >
        
      <h1>{props.nasaData.title}</h1>
      <h4>{props.nasaData.date}</h4>
     
        <img src={props.nasaData.hdurl} alt="NASA iotd"/>
      {/* <h4>{props.nasaData.explanation}</h4> */}
      <div className="content">
        <button onClick={toggle}>
          {showExplanation ? "Collapse" : "Read More"}
        </button>
        <div className="description">
          {showExplanation ? (
            <p className="explan">{props.nasaData.explanation}</p>
          ) : null}
       
        </div>
        </div>
    </DivStyled>
  );
}
const DivStyled = styled.div`
  background-color:rgb(240, 226, 243);
  margin:10%;
  img {
    width: 86%;
     box-shadow: -7px -10px 50px 16px rgba(59,14,59,0.87);

  }
  h4{

    margin:0 auto;
    width:86%;
    text-align:center;
  }
  button{
    height:70px;
    width:70px;
    color:rgb(240, 226, 243);
    background-image: url(https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_1280.jpg);
    border-radius:100%;
  }
  /* width:62.3%; */


 
 
`

