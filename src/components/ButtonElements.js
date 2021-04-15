import styled from "styled-components"

export const Button = styled.button `
    border-radius: 3px;
    background: ${({ btnColor}) => (btnColor ? "#118A35" : "#43A861")};
    white-space: nowrap;
    padding: ${({ large }) => (large ? "10px 32px" : "5px 20px")};
    color: #fff;
    font-size: ${({ fontLarge }) => (fontLarge ? "20px" : "10px")};
    font-family: "Gloria Hallelujah", cursive;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{
        transition: all 0.4s ease-out;
        background: ${({ btnColor}) => (btnColor ? "#43A861" : "#118A35")};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`