import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(128, 128, 128, 0.35);
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
export const Box = styled.div`
    background-color: black;
    color: #e1e1e1;
    border: 3px solid #e1e1e1;
    
    opacity: none;
    border-radius: 0.25rem;
    width: 420px;
    margin-top: 3rem;
    text-align: center;
`;
export const Header = styled.div`
    border-bottom: 1px solid #eee;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    svg{
        font-size: 1.3rem;
        &:hover{
            opacity: 0.5;
            cursor: pointer;
        }
    }
`;
export const Content = styled.div`
    padding: 1rem;
    textarea{
        outline: none;
        border-radius: 10px;
        width: 85%;
        height: 80px;
        padding: 15px;
        resize: none;
        font-size: 0.8rem;
        color: #535252;
        font-weight: bold;
        
    }
`;
export const Footer = styled.div`
    display: flex;
    padding: 0 1rem 1rem;
    justify-content: center;

    button{
        border-radius: 10px;
        background-color: #1e1e1e;
        color: #e1e1e1;
        padding: 10px;
        cursor: pointer
    }
    button:hover{
        opacity: 0.7;
    }

    & > button:not(:last-child) {
        margin-right: 1rem;
    }
`;
