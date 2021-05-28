import React from 'react';
import imagedetails from './imagedetails';
import footer from './footer';





const details = (props) => {
const { data } = props;
return (
    <div>
        <imagedatails image={data.url} title={data.title} date={data.date} />
        <footer explanation={data.explanation}/>
    </div>
 )
}

export default details;