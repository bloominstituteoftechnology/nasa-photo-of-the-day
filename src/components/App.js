//Importing React and Hooks
import React, { useState, useEffect } from "react";
//Importing the necesary to fetch the NASA API
import axios from 'axios'
//NASA API
import { BASE_URL, API_KEY } from '../constants'

//Own Components
import Header from '../components/Header'
import SelectMedia from '../components/SelectMedia'
import Information from '../components/Information'


//CSS Styles
import 'normalize.css';
import "../App.css";
import styled from 'styled-components'

function App() {

  const [currentMedia, setCurrentMedia] = useState([])
  // With currentContent we will defined witch Component will be mount on DOM: Media or Info
  const [currentContent, setCurrentContent] = useState('Media')

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        setCurrentMedia(res.data)
      })
      .catch((err) => {
        alert("It looks like the API has left to a better place. So! Here we have some dummy data just for you.")
        console.log(err)
      })
  }, [])


  return (
    <StyleApp>

      <Header />

      <div className="media">
        {
          currentContent === 'Media'
          ? <SelectMedia media_type={'Image'} title={currentMedia.title} url={currentMedia.url} />
          : <Information title={currentMedia.title} date={currentMedia.date} explanation={currentMedia.explanation} />
        }

        {
          currentContent === 'Media'
          ? <button className="btn-see-more" onClick={() => setCurrentContent('Info')}>👀 + 📓</button>
          : <button className="btn-see-more" onClick={() => setCurrentContent('Media')}>👀 + 🚀</button>
        }
      </div>

    </StyleApp>
  );
}

export default App;

const StyleApp = styled.div`
  button {
    color: ${(pr) => pr.theme.primaryColor};
    box-shadow: ${(pr) => pr.theme.buttonShadow};
  }
`;