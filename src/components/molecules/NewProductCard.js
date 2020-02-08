import React from 'react';
import styled from 'styled-components'
import Button from '../atoms/Button'
import {FIRST_BREAKPOINT, SECOND_BREAKPOINT} from "../../constants";

const NewProductCard = ({margin, title, category, description, price}) => {
    return (
        <Card margin={margin}>
            <ProductImage src={`https://via.placeholder.com/50`}/>
            <ProductDetails>
                <Title>{title}</Title>
                <Category>{category}</Category>
                <Description>{description}</Description>
                <Price>{price}</Price>
                <Button color={`black`} background={`white`} borderColor={`black`} url={`/`}>shop now</Button>
            </ProductDetails>
        </Card>
    )
};

export default NewProductCard

const Card = styled.div`
    border: 1px solid #D9D9D9;
    padding: 10px;
    background: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 50%;
    margin: ${props => props.margin};
    height: 250px;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        padding-right: 5px;
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        margin: 10px 0;
        width: 100%;
        max-width: 660px;
        height: 300px
    };

`;

const ProductImage = styled.img`
    height: 100%;
    width: 50%;
    background: #c3c3c3;
`;

const ProductDetails = styled.div`
    color: #545454;
    font-weight: 500;
    text-align: left;
    margin-left: 20px;
    width: 50%;
    height: 100%;
    
    @media (max-width: ${FIRST_BREAKPOINT}) {
        margin-left: 6.6px;
    };
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        margin-left: 15px
    };

`;

const Title = styled.h6`
    font-style: normal;
    font-size: 22px;
    margin: 0;
    text-transform: capitalize
`;

const Category = styled.p`
    font-size: 15px;
    margin: 0;
    text-transform: capitalize
`;

const Description = styled.p`
    font-size: 14px;
    margin: 8px 0;
    text-transform: capitalize
`;

const Price = styled.p`
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 30px
`;