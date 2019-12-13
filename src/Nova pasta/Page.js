import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Title from './Title';
import Date from './Date';
import Image from './Image';
import Desc from './Desc';
import Footer from './Footer';

//styled components
const Flex = styled.div`
  display: flex;
`;

function Page() {
  const [nasa, setNasa] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=fXECkPLRbIE6uIjWlJjJ5CEnbmgbCpPMfrfTZbTW'
      )
      .then(res => {
        console.log(res.data);
        setNasa(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Title title={nasa.title} />
      <Date date={nasa.date} />
      <Flex>
        <Image image={nasa.url} />
        <Desc desc={nasa.explanation} />
      </Flex>
      <Footer author={nasa.copyright} />
    </div>
  );
}

export default Page;
