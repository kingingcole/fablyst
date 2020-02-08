import React from 'react';
import styled from 'styled-components'
import Button from '../atoms/Button'
import {THIRD_BREAKPOINT} from "../../constants";

const HomeImageBanner = () => {
    return (
        <Banner>
            <div style={{maxWidth: '400px'}}>
                <MediumText>super deal</MediumText>
                <LargeText>office pick <br/>shirts and blouses</LargeText>
                <Price>$20</Price><small>   each</small>
                <SmallText>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  vLorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</SmallText>
                <Button color={`black`} background={`transparent`} borderColor={`black`} url={`/`}>shop now</Button>
            </div>
        </Banner>
    )
};

export default HomeImageBanner

const Banner = styled.section`
    width: 100%;
    box-sizing: border-box;
    background: #DFDFDF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
    padding: 60px 20px;
    text-align: left;
    border-radius: 2px
`;

const LargeText = styled.h4`
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: #363636;
    margin: 0;
    text-transform: uppercase;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        font-size: 28px
    };
`;

const MediumText = styled.h6`
    font-weight: 500;
    font-size: 15px;
    color: #363636;
    margin: 0;
    text-transform: uppercase;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        font-size: 13px
    };
`;

const SmallText = styled.p`
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #363636;
    margin: 0;
    margin-bottom: 30px;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        font-size: 14px
    };
`;

const Price = styled.p`
    color: #DF0052;
    font-size: 32px;
    line-height: 41px;
    margin: 6px 0 20px 0;
    display: inline-block;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        font-size: 28px
    };
`;