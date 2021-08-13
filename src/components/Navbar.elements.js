import styled from 'styled-components';
// import { FaBars, FaTimes } from 'react-icons/fa'
import { FaCloudSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from './globalStyles';



export const Nav = styled.nav`
    background: pink;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0; 
    z-index: 999;
`
export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    font-weight:bold;

    ${Container}
`;

export const NavLogo = styled(Link)`
color: royalblue;
justify-content: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`

export const NavIcon = styled(FaCloudSun)`
    margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width:100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({ click }) => (click ? 0 : '100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #101522;
    }
`

export const NavItem = styled.li`
    height: 80px;
    /* border-bottom: 2px solid #4b59f7; */
    display: flex;
    align-items: center;

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%auto;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
    `

    export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: none;
        justify-content: center;
        align-items: center;
        width: 100%auto;
        height: 120px;
    }
    `

    export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    `