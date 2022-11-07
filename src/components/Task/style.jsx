import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid red;
    width: 900px;
    padding: 1rem;
    justify-content: space-between;
    text-decoration: ${(props) => props.done ? 'line-through' : 'none'};
    opacity: ${(props) => props.done ? 0.5 : 1};
    background-color: #1e1e1e;
    color: white;
   
    div{
        border: 1px solid black;
        padding: 0.2rem;
        &:hover{
            opacity: 0.4;
        }
    }
    button:hover{
        opacity: 0.4;
    }
    
    

   
`;