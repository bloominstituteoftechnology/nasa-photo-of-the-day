import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Apodinfo from "./components/Apodinfo";
import Apod from "./components/Apod";
import Forms from "./components/Forms";
import { Button, Section } from "./components/style";

function App() {
  const [displayshow, displayHidden] = useState(false);
  const [displaydate, changeDate] = useState(false);
  const [apod, setApod] = useState([]);
  const [info, setInfo] = useState(``);
  const [date, setDate] = useState(``);
  const [title, setTitle] = useState(``);

  const [count, setCount] = useState(2019);
  const [countday, setCountday] = useState(13);
  const [countmonth, setCountmonth] = useState(12);

  const [year, setYear] = useState(count);
  const [day, setDay] = useState(countday);
  const [month, setMonth] = useState(countmonth);

  const [photoOftheDay, setPhotoOftheDay] = useState(``);
  const nasakey = `CIb9BdoewJPtHNXbgGlBigAR7uVuDCup3e88hOBY`;

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${nasakey}&date=${year}-${month}-${day}`
      )
      .then(response => {
        const photoOftheDay = response.data;
        console.log(photoOftheDay);

        const apodImg = response.data.hdurl;
        const apodinfo = response.data.explanation;
        const apoddate = response.data.date;
        let apodtitle = response.data.title;

        setApod(apodImg);
        setInfo(apodinfo);
        setDate(apoddate);
        setTitle(apodtitle);
      })
      .catch(err => {
        console.log(`Error:` + err);
        setPhotoOftheDay({
          copyright: ``,
          title: ``,
          explanation: `Sorry`,
          hdurl: `https://images.unsplash.com/photo-1555861496-0666c8981751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
        });
      });
  }, [year, month, day]);

  const displaycontent = {
    show: {
      display: `none`
    },
    hide: {
      display: `flex`
    }
  };
  // Date current theme
  let currentThemedate = {};
  displaydate
    ? (currentThemedate = displaycontent.hide)
    : (currentThemedate = displaycontent.show);

  // current theme for text content
  let currentTheme = {};
  displayshow
    ? (currentTheme = displaycontent.hide)
    : (currentTheme = displaycontent.show);

  const toggledisplay = () => {
    displayHidden(!displayshow);
  };

  const Toggleview = () => {
    changeDate(!displaydate);
  };

  const handleyrchange = e => {
    setCount(e.target.value);
  };
  const handledaychange = e => {
    setCountday(e.target.value);
  };
  const handlemonthchange = e => {
    setCountmonth(e.target.value);
  };

  const onSubmityr = event => {
    event.preventDefault();
    setCount(count);
  };
  const onSubmitdy = event => {
    event.prventDefault();
    setCountday(countday);
  };
  const onSubmitmth = event => {
    event.prventDefault();
    setCountmonth(countmonth);
  };

  var divStyle = {
    backgroundImage: `url(${apod})`,
    width: "100%",
    height: "100vh",
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`
  };

  console.log(`Date`, count, countday, countmonth);

  return (
    <div className='App' style={divStyle}>
      <div style={{ paddingTop: `.5%` }}>
        <a onClick={Toggleview}>
          <img
            style={{ width: `40px`, height: `40px` }}
            src='http://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/572482/Arts_Calendar_Logo-Icon_for_PRX_small.png'></img>
        </a>
      </div>
      <div className='formbuttondiv'>
        <Section
          style={currentThemedate}
          className='formbg'
          background='#0000ff00'>
          <Forms
            handledaychange={handledaychange}
            onSubmitdy={onSubmitdy}
            handlemonthchange={handlemonthchange}
            onSubmitmth={onSubmitmth}
            handleyrchange={handleyrchange}
            onSubmityr={onSubmityr}></Forms>
          <Button
            primary
            onClick={e => {
              setYear(count);
              setMonth(countmonth);
              setDay(countday);
            }}>
            Change Date
          </Button>
        </Section>
      </div>
      <div>
        <div
          style={{ marginLeft: `2%`, marginTop: `2%` }}
          className='buttoncont'>
          <a onClick={toggledisplay}>
            <img
              style={{ width: `40px`, height: `40px` }}
              src='https://image.flaticon.com/icons/png/512/1661/1661909.png'
              alt='calandar'></img>
          </a>
        </div>
        <Section style={currentTheme} className='TextCont' background='#342d39'>
          <Apod apod={apod}></Apod>
          <Apodinfo info={info} date={date} title={title} />
        </Section>
      </div>
    </div>
  );
}

export default App;
