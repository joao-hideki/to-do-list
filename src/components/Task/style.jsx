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
    color: #e1e1e1;
    border: 2px solid rgba(238, 238, 238, 0.2);
    border-radius: 15px;

    .check-icon{
        display: ${(props) => props.done ? 'inline' : 'none'};
    }
    .edit-icon, .delete-icon{
        display: ${(props) => props.done ? 'none' : 'inline'};
    }
`;

export const DoneArea = styled.div`
    border: 1px solid black;
    height: 23px;
    width: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    .check-icon{
        height: 60%;
        width: 60%;
    }

    &:hover{
        opacity: 0.4;

        .check-icon{
            display: inline;
        }
    }
`;

export const EditingArea = styled.div`
    width: 60px;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
   
   svg{
    font-weight: bold;
    font-size: 1.3rem;
    &:hover{
        opacity: 0.5;
    }
   }
`;
export const TextArea = styled.div`
    h2{
        font-size: 1.2rem;
    }
`;