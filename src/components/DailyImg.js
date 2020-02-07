import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import DailyImgCard from "./DailyImgCard";

export default function DailyImg() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=CeoOXwG8mb9j0TUlz6yfRg1Dyfeu13MqawscxSTr"
            )
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => console.log(error));
    }, []);
    console.log(data);
    if (!data) return <h3>Loading...</h3>;
    return (
        <div className="data">
            <NavBar date={data.date} />
            <DailyImgCard
                data={data}
                url={data.url}
                title={data.title}
                explanation={data.explanation}
                copyright={data.copyright}
            />
        </div>
    );
}
