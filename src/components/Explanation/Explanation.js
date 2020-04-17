import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Information from '../Information/Information';
import { ExplaWrapper, ExplaText } from './ExplanationStyles';

const Expla = props => {
    const [title, setTitle] = useState('Title');
  const [date, setDate] = useState('Date');

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=53EAKbcgr8iwccEsLf1sr1MV5dFS3bU0ZseKATiX")
      .then((res) => {
          console.log('response', res)
          setTitle(res.data.title);
          setDate(res.data.date);
        })

      .catch((err) => {
        console.log("There was an error: ", err);
      })

}, []);
    return (
        <ExplaWrapper>
            <Information title={title} date={date}/>
            <ExplaText>{props.expla}</ExplaText>
        </ExplaWrapper>
    );
};

export default Expla;