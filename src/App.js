import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios';
import User from './components/User';
import styled from 'styled-components';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(res => {
        setUsers(res.data.results);
      })
      .catch(err => console.error(err))
  }, [])

const Styled = styled.div`
width: 100%;
display: flex;
justify-content: row;


background-color: ${pr => pr.theme.primaryColor};
color: ${pr => pr.theme.white};

transition: all 0.2s ease-inout;
&:hover {
  transition: all 0.2s ease-in-out;
  color: ${pr => pr.theme.secondaryColor};
  background-color: yellow;
}

@media (max-width: 550px) {
  width: 100%;
}
`

  return (
    <Styled className="App">
      <h1>vyniBook v.1 !</h1>
      {users.map(user => <User user={user} key={user.login.uuid} />)}
    </Styled>
  );
}

export default App;
