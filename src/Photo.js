import { render } from '@testing-library/react'
import React from 'react'




function Photo (data) {





    return (
       <div>
        {
           data.isFetchingdata ? (
           <p>loading upcoming photos...</p>
           ) : (
            <button onClick ={data.getDataBtn}>
            This the nasa photo{data.name}
        </button>
           )
       }
       </div>
    )
}

export default Photo 