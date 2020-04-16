import React, { useState, useEffect} from "react";
import axios from "axios";
// import ChangeDate from "./conainter/ChangeDate";
import ApodCard from "./conainter/ApodCard";


// import ImageCont from "./conainter/ImageCont"


//apiKey
import {apiKey} from "../private/private";

//styles
import styled from "styled-components";

const TheCardHolder = styled.div`
 display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    /* border:red 1px solid; */
    width: 100%;
`;
const Header = styled.div`
// background-color:tomato;
width:100vw;
height:min-content;
// position:fixed;
// z-index: 5;
`;
const HeaderTitle = styled.h1`
font-size:3rem;
font-family: 'Monoton', cursive;
`;

const TheCard = styled.div`
//  margin-top:50px;
`;

export default function Apod () {

    
    
    const [image,setImage]= useState({});
    const [date, setDate] = useState([]);
    const [exp, setExp] = useState([]);
    const [title, setTitle] = useState([]);
 
// const changeDate = newDate => {
//             setDate(newDate)
//         };
    
  
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(res => {
                // console.log(res.data);
                
                setImage(res.data.hdurl);
                setExp(res.data.explanation);
                setTitle(res.data.title);
                setDate(res.data.date);
            })

          
            .catch(err => {
                console.log(err);
            })
       
    }, []);

    return  (
    <TheCardHolder>
       <Header>
           <HeaderTitle>Nasa Image Of The Day</HeaderTitle>
       </Header>

           <TheCard>
                {/* <ChangeDate changeDate={() => changeDate(document.getElementById("date").value)} /> */}
                   <ApodCard title={title} date={date} image={image} exp={exp} 
                   
                   />
               
           </TheCard>
        </TheCardHolder> 
        );

}






