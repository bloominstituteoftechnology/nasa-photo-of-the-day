import React, { useEffect, useState } from "react";
import "./App.css";
import Icons from "./gallery";
import styled from 'styled-components';

export default function App()
{
    const [links, setLinks] = useState(null);
    const [banner, setBanner] = useState(null);
    const [gallery, setGallery] = useState(null);

    const Container = styled.div`
        background-color: white;
    `;

    const HeaderContainer = styled.header`
        background-color: white;
        text-align: center;
        font-family: Arial;
        font-size: 20px;
    `;

    const BannerContainer = styled.div`
        text-align: center;
        background-color: #fcd5ce;
        font-family: Arial;
        font-size: 10px;
        color: #e76f51;
    `;

    // Create a <Title> react component that renders an <h1> which is
    // centered, palevioletred and sized at 1.5em
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

    const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: palevioletred;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
        a{
            color: palevioletred;
        }

        ${props => props.primary && `
            background: palevioletred;
            a{
                color: white;
            }
        `}

        ${props => props.secondary && `
            background: #ffd7ba;
            a{
                color: #0096c7;
            }
        `}
    `;

    // Create a <Wrapper> react component that renders a <section> with
    // some padding and a papayawhip background
    const Wrapper = styled.section`
        background: papayawhip;
    `;

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
            { id: "3", img: "https://picsum.photos/300/300?grayscale", iconName: "Portfolio Piece" },
            { id: "4", img: "https://picsum.photos/300/300?grayscale", iconName: "Portfolio Piece" },
            { id: "5", img: "https://picsum.photos/300/300?grayscale", iconName: "Portfolio Piece" },
            { id: "6", img: "https://picsum.photos/300/300?grayscale", iconName: "Portfolio Piece" }
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
        <BannerContainer>
            <h1>{props.info.title}</h1>
            <Button secondary><a href={props.info.link}>{props.info.name}</a></Button>
        </BannerContainer>
    );

    return (
        <Container>
            <HeaderContainer>
                <nav>
                    <Title>NASA</Title>
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
            </HeaderContainer>

            {
                banner &&
                <ImageButton info={banner} />
            }
            {
                gallery &&
                <Wrapper>
                    <div className="row">
                        <Icons gallery={gallery.slice(0, 3)} />
                    </div>
                    <div className="row">
                        <Icons gallery={gallery.slice(3, 6)} />
                    </div>
                </Wrapper>
            }
        </Container>
    );
}