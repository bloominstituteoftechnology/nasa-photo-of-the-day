import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(res => {
        setUsers(res.data.results);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1>vyniBook v.1 !</h1>
      {users.map(user => <User user={user} key={user.login.uuid} />)}
    </div>
  );
}

export default App;
