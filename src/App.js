import React, { useEffect, useState } from "react";
import "./App.css";
import Icons from "./gallery";
// import styled from 'styled-components';
import { Button, Container, Header1 } from "./theme";

export default function App()
{
    const [links, setLinks] = useState(null);
    const [banner, setBanner] = useState(null);
    const [gallery, setGallery] = useState(null);

    useEffect(() =>
    {
        // 1) we are loading links from outside source (internet)
        // ...

        // 2) for now we are using hardcoded data
        const linksArray = [
            { id: "1", name: "Home", link: "../assets/index.html" },
            { id: "2", name: "About", link: "../assets/about.html" },
            { id: "3", name: "Contact", link: "../assets/contact.html" },
            { id: "4", name: "Projects", link: "../assets/projects.html" }];

        // 3) save data in State
        setLinks(linksArray);
    }, []);

    useEffect(() =>
    {
        // 1) we are loading gallery from outside source (internet)
        // ...

        // 2) for now we are using hardcoded data
        const portfolioElements = [
            { id: "1", img: "https://picsum.photos/300/300?grayscale", iconName: "Portfolio Piece" },
            { id: "2", img: "https://picsum.photos/300/300?grayscale", iconName: "Portfolio Piece" },
            { id: "3", img: "https://picsum.photos/300/300?grayscale", iconName: "Portfolio Piece" }
        ];

        // 3) save data in State
        setGallery(portfolioElements);
    }, []);

    useEffect(() =>
    {
        // 1) we are loading banner from outside source (internet)
        // ...

        // 2) for now we are using hardcoded data
        const bannerInfo = { title: "Anastasia Lapteva", name: "My Portfolio", link: "../assets/projects.html" };

        // 3) save data in State
        setBanner(bannerInfo);
    }, []);

    const Link = props =>
    (
        <Button primary><a href={props.info.link}>{props.info.name}</a></Button>
    );

    const ImageButton = props =>
    (
        <Container>
            <h1>{props.info.title}</h1>
            <Button><a href={props.info.link}>{props.info.name}</a></Button>
        </Container>
    );

    return (
        <Container>
            <header>
                <nav>
                    <Header1>ANASTASIA LAPTEVA</Header1>
                    {
                        links &&
                        <>
                            {
                                links.map(item =>
                                {
                                    return <Link key={item.id} info={item} />;
                                })
                            }
                        </>
                    }
                </nav>
            </header>
            {
                banner &&
                <ImageButton info={banner} />
            }
            {
                gallery &&
                <div className="row">
                    <Icons gallery={gallery} />
                </div>
            }
        </Container>
    );
}