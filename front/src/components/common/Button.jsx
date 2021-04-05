import React from 'react';
import styled from 'styled-components';

const Button=({onClick,text})=>{
    return (
    <ButtonWrapper onClick={onClick}>
        <Text>{text}</Text>
    </ButtonWrapper>
    
    );
}

const ButtonWrapper=styled.button`
  background-color:transparent;
  border: 1px solid transparent;

`;
export default Button;
