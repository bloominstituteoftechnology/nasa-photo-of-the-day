import React from 'react';

const Info = props => {
    const {exp, author, date} = props;

    return(
        <div className='info'>
            <div>
                <nav className='footer'>
                    <a href="/">Photographer:<br/>{author}</a>
                    <a href="/">Date:<br/>{date}</a>
                </nav>
            </div>
            <div className="exp">
                <span>
                    {exp}
                </span>
            </div>
        </div>
    )
}

export default Info