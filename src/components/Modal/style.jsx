import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(128, 128, 128, 0.3);
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;
export const Box = styled.div`
    background-color: white;
    opacity: none;
    border-radius: 0.25rem;
    width: 420px;
    margin-top: 3rem;
    text-align: center;
`;
export const Header = styled.div`
    border-bottom: 2px solid #eee;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    button{
        appearance: none;
        padding: 6px 1rem;
        cursor: pointer;
        

        &:hover{
            color: blue;
        }
    }
`;
export const Content = styled.div`
    padding: 1rem;
`;
export const Footer = styled.div`
    display: flex;
    padding: 0 1rem 1rem;
    justify-content: center;

    button{
        border-radius: 10px;
        padding: 5px 8px;
        cursor: pointer
    }

    & > button:not(:last-child) {
        margin-right: 1rem;
    }
`;
