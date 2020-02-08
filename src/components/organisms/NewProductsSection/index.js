import React, {Fragment, useState} from 'react';
import NewProductCard from '../../molecules/NewProductCard'
import {Container} from './style'
import CategoryHeading from '../../atoms/CategoryHeading'

const NewProductsSection = () => {

    //TODO handle query for new products
    //products fetched should be ONLY two

    let new_products = [{

        // truncate the description to first few words
        // e.g description = description.slice(70)

       id: 1,
       productImage: `https://via.placeholder.com/50`,
       title: 'Fine sneakers',
       category: 'shoes',
       description: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
       price: '$54.87',
    }, {
        id: 2,
        productImage: `https://via.placeholder.com/50`,
        title: 'gray hoodie',
        category: 'hoodies',
        description: 'Lorem ipsum dolor sit Lorem ipsum dolor sit',
        price: '$29.87',

    }];

    let [newProducts, setNewProducts] = useState(new_products);

    return (
        <Fragment>
            <hr/>
            <CategoryHeading largeText={`new products`} smallText={`Lorem ipsum dolor sit`}/>
            <Container>
                <NewProductCard
                    margin={`0px 10px 0px 0px`}
                    category={newProducts[0].category}
                    description={newProducts[0].description}
                    title={newProducts[0].title}
                    price={newProducts[0].price}
                />
                <NewProductCard
                    margin={`0px 0px 0px 10px`}
                    category={newProducts[1].category}
                    description={newProducts[1].description}
                    title={newProducts[1].title}
                    price={newProducts[1].price}
                />
            </Container>
        </Fragment>
    )
};

export default NewProductsSection