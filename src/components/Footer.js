import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


export default function Footer(props){
    const {date, setNasaPhoto, values, change, submit, disabled, copyright } = props

    const days = []
    const years = []

    for(let i = 1; i <= 31; i++){
        days.push(<option key={i} value={i < 10 ? "0" + i : i}>{i}</option>)
    }

    for(let i = 2021; i > 1994; i--){
        years.push(<option key={i} value={i}>{i}</option>)
    }

    const onChange = (event) =>{
        const { name, value } = event.target
        change(name,value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        submit()
    }

    
    useEffect(() =>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=1D1cPFJ0V1f1n57x1rcKBU2lH66n9CZIg52J9yoD&date=' + date)
        .then((res) =>{
          console.log(res.data);
          setNasaPhoto(res.data)
        })
      }, [date])


    return(
        <StyledFooter className='footer'>
            <div>
                <p>Select a Day for a new image</p>
                <form onSubmit={onSubmit}>
                    <div className='selectDate'>

                        <div className='year'>
                            <label>Year</label>
                            <select 
                                className='year'
                                onChange={onChange}
                                value={values.year}
                                name='year'>
                                <option value=''>-- Year --</option>
                                {years}
                            </select>
                        </div>

                        <div className='month'>
                            <label>Month</label>
                            <select 
                                className='month'
                                onChange={onChange}
                                value={values.month}
                                name='month'>
                                <option value=''>-- Month --</option>
                                <option value='01'>January</option>
                                <option value='02'>February</option>
                                <option value='03'>March</option>
                                <option value='04'>April</option>
                                <option value='05'>May</option>
                                <option value='06'>June</option>
                                <option value='07'>July</option>
                                <option value='08'>August</option>
                                <option value='09'>September</option>
                                <option value='10'>October</option>
                                <option value='11'>November</option>
                                <option value='12'>December</option>
                            </select>
                        </div>

                        <div className='day'>
                            <label>Day</label>
                            <select 
                                className='day'
                                onChange={onChange}
                                value={values.day}
                                name='day'>
                                <option value=''>-- Day --</option>
                                {days}
                            </select>
                        </div>

                    </div>

                    <button disabled={disabled}>Load new Image</button>

                </form>
            </div>

            <p>Copyright by {copyright}</p>
        </StyledFooter>
    )
}

//styled component
const StyledFooter = styled.div`
    color: white;
    background-Color: black;
    margin: 0;
`;