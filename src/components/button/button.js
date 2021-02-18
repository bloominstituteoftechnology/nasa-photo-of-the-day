import React from 'react';

const Button = props => {

  
    return(
        <div className="button">
            <button onClick={() => { console.log('button works')} }>Touch Me!</button>
            <form className="search-day">
        <input
          type="text"
          placeholder="Day"
        />
      </form>
      <form className="search-month">
        <input
          type="text"
          placeholder="Month"
        />
      </form>
      <form className="search-year">
        <input
          type="text"
          placeholder="Year"
        />
      </form>
        </div>
    )
    
}

export default Button;