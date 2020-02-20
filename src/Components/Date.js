import React, {useState, useRef} from 'react';
import styled from 'styled-components'

const CustomInput = styled.input`
 background: lightblue;
 color: white;
 opacity: 90%;
 height: 2vh;
 margin: 0 1%;

`
const CustomButton = styled.button`
  background: lightgrey;
  height: 2vh;
  width: 6%;
  font-size: 1.2rem;
  color: red;
`


const Date = (props) => {
     
    
    return (
        <div>
            <form  onSubmit= { (e) => props.handleSubmit(e)}>
                <p>Select Date To See Picture From That Date</p>
                <CustomInput onChange = {(e) => props.handleDate(e)} type='text'  id='myData' placeholder='Date (YYYY-MM-DD)'/>
                <CustomButton>Submit</CustomButton>
                
           </form>
        </div>
    );
};

export default Date;