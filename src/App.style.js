import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: black;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    gap: 15px;
    margin: auto;
    margin-top: 4vh;
`;
export const AddButton = styled.div`
    background-color:  #DB4C3F;
    width: 250px;
    padding: 15px;
    border-radius: 15px;
    font-weight: bold;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    svg{
        font-size: 1.5rem;
    }

    &:hover{
        opacity: 0.7;
    }
`;