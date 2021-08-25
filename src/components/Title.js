import React from 'react';


function Title(props) {
// Display a loading message while the data is fetching
if (!props.title) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
return (
  <div><h2>{props.title}</h2></div>
)
}

export default Title;