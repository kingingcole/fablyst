import React,{Fragment, useState} from 'react'
import CategoryHeading from "../../atoms/CategoryHeading";
import {Container} from './style'
import PopularProductCard from '../../molecules/PopularProductCard'

const PopularProductsSection = () => {

    //TODO handle query for popular products
    //products fetched should be ONLY three

    let popular_products = [{
        id: 1,
        productImage: `https://via.placeholder.com/50`,
        title: 'perfect sneakers',
        category: 'shoes',
        description: 'Lorem ipsum dolor sit',
        price: '$54.87',
    }, {
        id: 2,
        productImage: `https://via.placeholder.com/50`,
        title: 'gray hoodie',
        category: 'hoodies',
        description: 'Lorem ipsum dolor sit',
        price: '$29.87',

    }, {
        id: 3,
        productImage: `https://via.placeholder.com/50`,
        title: 'gray hoodie',
        category: 'hoodies',
        description: 'Lorem ipsum dolor sit',
        price: '$29.87',

    }];

    let [popularProducts, setPopularProducts] = useState(popular_products);


    return (
        <Fragment>
            <hr/>
            <CategoryHeading largeText={`popular products`} smallText={`Lorem ipsum dolor sit`}/>
            <Container>
                { popularProducts.map(product => {
                    return <PopularProductCard image={product.productImage} title={product.title} price={product.price}/>
                }) }
            </Container>
        </Fragment>
    )
};

export default PopularProductsSection
