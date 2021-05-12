import React from 'react';

const PostDetails = props => {

    const { date, explanation } = props;

    return (
        <div>
            <div>
                <p>Date: {date}</p>
            </div>
            <div>
                <p>{explanation}</p>
            </div>
        </div>

    )


}

export default PostDetails;