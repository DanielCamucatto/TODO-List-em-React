import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: #20212C; 
    cursor: pointer;

    .trash-image{
        color: #FFFFFF
    }
    .trash-image:hover{
        color: #797A81; 
        -webkit-transition: color 0.4s ease-out;
        -moz-transition: color 0.4s ease-out;
        -o-transition: color 0.4s ease-out;
        transition: color 0.4s ease-out;
    }
`;
