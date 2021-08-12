import React, { useState } from "react";
import "./App.css";
import { linksArray, bannerInfo, portfolioElements } from "./defaultData";
import Icons from "./gallery";

export default function App()
{
    const [links] = useState(linksArray);
    const [banner] = useState(bannerInfo);
    const [gallery] = useState(portfolioElements);

    const Link = props =>
    (
        <button><a href={props.info.link}>{props.info.name}</a></button>
    );

    const ImageButton = props =>
    (
        <div>
            <h1>{props.info.title}</h1>
            <button><a href={props.info.link}>{props.info.name}</a></button>
        </div>
    );


    return (
        <div className="App">
            <header>
                <nav>
                    <h1>ANASTASIA LAPTEVA</h1>
                    {
                        links.map(item =>
                        {
                            return <Link key={item.id} info={item} />;
                        })
                    }
                </nav>
            </header>

            <ImageButton info={banner} />
            <Icons key={gallery.id} gallery={gallery} />
        </div>
    );
}
