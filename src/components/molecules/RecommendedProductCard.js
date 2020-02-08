import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {FIRST_BREAKPOINT, FOURTH_BREAKPOINT} from "../../constants";

const RecommendedProductCard = ({title, category, price, productUrl, productImage}) => {

    return (
        <Card to={productUrl}>
            <ProductImage src={productImage}/>
            <ProductDetails>
                <Category>{category}</Category>
                <Title>{title}</Title>
                <Price>{price}</Price>
            </ProductDetails>
        </Card>
    )
};

export default RecommendedProductCard

const Card = styled(Link)`
    height: 350px;
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.065925);
    width: 32%;
    background: white;
    text-decoration: none;
    
    @media (max-width: ${FOURTH_BREAKPOINT}) {
        width: 100%;
        height: 450px;
        margin-bottom: 20px
    };
`;

const ProductImage = styled.img`
    height: 70%;
    width: 100%;
    background: #C9C9C9;
    
    @media (max-width: ${FOURTH_BREAKPOINT}) {
        height: 70%
    };
`;

const ProductDetails = styled.div`
    padding-top: 10px;
    height: 30%;
    text-align: center;
    text-transform: uppercase;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    @media (max-width: ${FOURTH_BREAKPOINT}) {
        height: 30%;
        padding: 0;
        justify-content: center;
    };
`;

const Category = styled.p`
    font-size: 11.4px;
    color: #363636;
    margin: 0;
    padding: 0;
`;

const Title = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: #303030;
    margin: 5px 0;
    padding: 0;
`;

const Price = styled.p`
    font-weight: 600;
    font-size: 13px;
    color: #303030;
    margin: 0;
    padding: 0;
`;
