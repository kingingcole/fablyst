import React, {Fragment, useState} from 'react';
import {Container, Row} from './style'
import RecommendedProductCard from '../../molecules/RecommendedProductCard'
import CategoryHeading from '../../atoms/CategoryHeading'

const RecommendedProductsSection = () => {

    //TODO implement custom method for fetching real six (6) recommended products

    const sampleData = {
        id: Math.random(),
        category: 'Women',
        title: 'floral print wrap dress',
        price: '$42.66',
        productUrl: `/`,
        productImage: 'https://via.placeholder.com/50'
    };

    const data = new Array(6).fill(sampleData);
    const [recommendedProducts, setRecommendedProducts] = useState(data);


    return (
        // each ROW component needs 3 (three) products
        <Fragment>
            <hr/>
            <CategoryHeading largeText={`Recommended products`}/>
            <Container>
                <Row>
                    {recommendedProducts && recommendedProducts.slice(0,3).map(product => {
                        return <RecommendedProductCard
                            key={product.id}
                            category={product.category}
                            title={product.title}
                            price={product.price}
                            productUrl={product.productUrl}
                            productImage={product.productImage}
                        />
                    })}
                </Row>

                <Row>
                    {recommendedProducts && recommendedProducts.slice(3).map(product => {
                        return <RecommendedProductCard
                            key={product.id}
                            category={product.category}
                            title={product.title}
                            price={product.price}
                            productUrl={product.productUrl}
                            productImage={product.productImage}
                        />
                    })}
                </Row>
            </Container>
        </Fragment>
    )
};

export default RecommendedProductsSection