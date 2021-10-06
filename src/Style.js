import styled from "styled-components";

/*Header style components*/

export const Title = styled.h1`
    font-size: 3.1rem;
    font-family: 'Orbitron', sans-serif;
    justify-content: center;
`;

export const SubTitle = styled.h4`
    font-size: 1rem;
    justify-content: center;
`;

/*Nav style components*/

export const Link = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  margin: .8rem;
  margin-right: 4.8rem;
    justify-content: center;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Orbitron', sans-serif;
`;

export const Date = styled.p`
  font-size: 1.5rem;
  margin-left: 1.8rem;
`;

/*MainContent style components*/

export const Container = styled.div`
    width: 100%;
`;

export const MainContentDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 6rem;
`;

export const Img = styled.img`
    width: 90%;
    border-radius: 5px;
`;

export const Desc = styled.p`
    width: 85%;
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 10rem;
`;