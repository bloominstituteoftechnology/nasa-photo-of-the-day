import React, { useState } from "react";
import "./App.css";
import { linksArray } from "./links";

export default function App()
{
    const [links] = useState(linksArray);



    const Link = props =>
    (
        <button><a href={props.info.link}>{props.info.name}</a></button>
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

        </div>
    );
}
