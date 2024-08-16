import { Link } from "react-router-dom";
import styled from "styled-components";

export const EntradaCabecalho =styled.input`
    height: 24px;
    width: 480px;
    border-radius:20px;
    border: none;
    padding:24px;
    
`

export const BotaoAdicionar = styled(Link)`
    background-color: #4CAF50;
    color: white;
    padding: 15px 32px;
    text-decoration: none; 
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049;
    }
`
export const Titulo = styled.h1`
    font-size:40px;
    color:white;
`
