import React, { useState, useEffect } from "react";
import axios from 'axios';
import Footer from './components/Footer';
import Image from './components/Image';
import Header from './components/Header';
import "./App.css";
import styled from 'styled-components';
import * as yup from 'yup'
import schema from './validation/formSchema'

const initialFormValues = {
  year: '',
  month: '',
  day: ''
}

const initialFormErrors = {
  year: '',
  month: '',
  day: ''
}

const initialDisalbled = true

function App() {
  const [nasaPhoto, setNasaPhoto] = useState('')
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [date, setDate] = useState(nasaPhoto.date)
  const [disabled, setDisabled] = useState(initialDisalbled)

  const updateForm = (name, value) =>{
    yup.reach(schema, name)
      .validate(value)
      .then(() =>{
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch((error) =>{
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = () =>{
    const newDate ={
      year: formValues.year.trim(),
      month: formValues.month.trim(),
      day: formValues.day.trim(),
    }
    setDate(`${newDate.year}-${newDate.month}-${newDate.day}`)
    setFormValues(initialFormValues)
  }

  useEffect(() =>{
      axios.get('https://api.nasa.gov/planetary/apod?api_key=1D1cPFJ0V1f1n57x1rcKBU2lH66n9CZIg52J9yoD')
      .then((res) =>{
        console.log(res.data);
        setNasaPhoto(res.data)
      })
    }, [])


  useEffect(() =>{
    schema.isValid(formValues).then((valid) =>{
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <StyledApp className="App">
      <Header />
      <Image nasaPhoto={nasaPhoto} key={nasaPhoto.date} />
      <Footer 
      copyright={nasaPhoto.copyright}
      setNasaPhoto={setNasaPhoto}
      date={date}
      values={formValues}
      change={updateForm}
      submit={submitForm}
      disabled={disabled}
      />
    </StyledApp>
    
  );
  
}

//styled component
const StyledApp = styled.div`
    color: white;
    background-Color: black;
`;

export default App;
