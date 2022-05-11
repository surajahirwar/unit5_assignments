// import './button.css'
import styled from 'styled-components'

const Button= styled.button`
    border-radius:3px;
    color: ${(props)=>(props.theme.color)};
    padding: 10px;
    border: ${(props)=>(props.theme.border)};
    margin-left: 10px;
    cursor: pointer;
    background-color:${(props)=>(props.theme.background)};
    font-weight: bold;
`;
export {Button}