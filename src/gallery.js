import React from 'react';
import { Gallery } from "./theme";

export default function Icons(props)
{
    return (
        <div className="portfolio-element">
            {
                props.gallery.map(item =>
                {
                    return (
                        <Gallery key={item.id}>
                            <img src={item.img} alt={item.iconName} />
                            <p>{item.iconName}</p>

                        </Gallery>
                    );
                })
            }
        </div >
    );
};