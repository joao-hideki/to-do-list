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
    background-color: #e1e1e1;
    color: #1e1e1e;
   
    div{
        border: 1px solid black;
        height: 23px;
        width: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        .check-icon{
            display: ${(props) => props.done ? 'inline' : 'none'};
            height: 60%;
            width: 60%;
        }
        &:hover{
            opacity: 0.4;

            .check-icon{
                display: inline;
            }
        }
    }

    button:hover{
        opacity: 0.4;
    }

    .edit-icon, .delete-icon{
        display: ${(props) => props.done ? 'none' : 'inline'};
    }
`;