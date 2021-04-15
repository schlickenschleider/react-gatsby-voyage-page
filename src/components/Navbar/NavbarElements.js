import styled from "styled-components"
import { BiWater } from "react-icons/bi"
import { Link } from "gatsby"

export const Nav = styled.nav `
    background: ${({ active }) => active ? "linear-gradient(to bottom, #118A35 20%, rgba(255, 255, 255, 0) 100%) " : "linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%) "};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: "Gloria Hallelujah", cursive;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width: 960px){
        background: ${({click}) => (click ? "#43A861" : "transparent")};
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 568px) {
        width: 100%;
        display: flex;
        justify-self: flex-start;
    }
`

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1000px;
`

export const NavLogo = styled(Link) `
    display: flex;
    color: #fff;
    justify-self: start;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    cursor: pointer;
`

export const NavIcon = styled(BiWater) `
    margin: 0 0.5rem 0 2rem;
`

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: -16px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        color: #fff;
        cursor: pointer;
    }
`   

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 40vh;
        position: absolute;
        top: ${({click}) => (click ? "100%" : "-1000px") };
            opacity: 1;
            transition: all 0.6s ease;
            background: #43A861;
    }
`

export const NavItem = styled.li `
    height: 80px;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
` 

export const NavLinks = styled(Link) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: "Ubuntu", sans-serif;

    @media screen and (max-width: 960px) {
        text-align: center;
        justify-items: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #212E25;
            transition: all 0.3s ease;
        }
    }
`