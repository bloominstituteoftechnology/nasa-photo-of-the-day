import React from 'react';

const Explanation = (props) => {
    const { explanation } = props

    return (
        <div>
            <h4>-----------Explanation----------</h4>
                <p> {explanation} </p>
            <h4>--------------------------------</h4>
        </div>
    );
};

export default Explanation