import React from 'react'
import styled from 'styled-components'
import {FIRST_BREAKPOINT} from "../../constants";

const Card = ({image, category, description, id}) => {
    return (
        <Container>
            <Image src={`https://via.placeholder.com/70`}/>
            <TextsContainer>
                <SmallText>{category}</SmallText>
                <LargeText>{description}</LargeText>
                <Number>{id}</Number>
            </TextsContainer>
        </Container>
    )
};

export default Card

const Container = styled.div`
    border: 1px solid #D9D9D9;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: auto;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        padding: 5px;
    }
`;

const Image = styled.img`
    height: 100%;
    width: 40%;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        width: 50%;
    }
`;

const TextsContainer = styled.div`
    margin-left: 10px;
    text-align: left;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        width: 50%;
    }
    
`;

const LargeText = styled.h3`
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;  
    color: #363636;
    margin: 0
`;

const SmallText = styled.p`  
    font-size: 15px;
    line-height: 27px;
    color: #363636;
    margin: 0
`;

const Number = styled.p`
    font-weight: bold;
    font-size: 25px;
    line-height: 27px;
    text-align: right;
    color: #B9B9B9;
    position: relative;
    top: 30px
`;