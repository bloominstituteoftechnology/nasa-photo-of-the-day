import React from 'react';


function Image(props) {
// Display a loading message while the data is fetching
console.log(props);
if (!props.image) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
return (
    <div>
  <img 
  src={props.image}
  alt="space and stars nasa"
  />
</div>)
}

export default Image;