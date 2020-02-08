import React from 'react';
import styled from 'styled-components'
import {FOURTH_BREAKPOINT} from "../../constants";

const CategoryHeading = ({largeText, smallText}) => {
    return (
        <Container>
            <LargeText>{largeText}</LargeText>
            {smallText && <SmallText>{smallText}</SmallText>}
        </Container>
    )
};

export default CategoryHeading

const Container = styled.div`
    padding: 10px 20px;
    margin: 0 auto;
    position: relative;
    background: white;
    top: -40px;
    display: inline-block
`;

const LargeText = styled.h4`   
    font-weight: bold;
    font-size: 23px;
    color: #363636;
    text-transform: uppercase;
    margin: 2px 0;

    @media (max-width: ${FOURTH_BREAKPOINT}) {
        font-size: 15px;
    };
`;

const SmallText = styled.p`
    font-weight: normal;
    font-size: 16px;
    color: #9F9F9F;
    margin: 0;

    @media (max-width: ${FOURTH_BREAKPOINT}) {
        font-size: 14px;
    };
`;