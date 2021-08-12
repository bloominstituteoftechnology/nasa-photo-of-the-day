import React from 'react';

export default function Icons(props)
{
    return (
        <div className="portfolio-element">
            {
                props.gallery.map(item =>
                {
                    return (
                        <div key={item.id} >
                            <img src={item.img} alt={item.iconName} className="projectIcon" />
                            <p>{item.iconName}</p>
                        </div>
                    );
                })
            }
        </div >
    );
};