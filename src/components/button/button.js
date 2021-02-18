import React from 'react';

const Button = props => {
const {myFunction} = props;
    

    return(
        <div className="button">
            <button onClick={myFunction}>Touch Me!</button>
            <form className="search-day">
        <input id="textday" placeholder="Day"/>
      </form>
      <form className="search-month">
        <input id="textmonth" placeholder="Month" />
      </form>
      <form className="search-year">
        <input
          id="textyear"
          placeholder="Year"
        />
      </form>
        </div>
    )
    
}

export default Button;