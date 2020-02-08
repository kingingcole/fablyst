import React from 'react'
import Card from '../../molecules/CarouselCard'
import {Container} from './style'

const Carousel = () => {

    // TODO fetch showcased products from store
    // for best UI performance, fetch three (3) products only

    let data = [
        {
            id: `01`,
            category: 'Women',
            description: 'Lorem ipsum dolor sit amet...'
        },

        {
            id: `02`,
            category: 'Men',
            description: 'Lorem ipsum dolor sit amet...'

        },

        {
            id: `03`,
            category: 'Women',
            description: 'Lorem ipsum dolor sit amet...'

        }
    ];

    return(
        <Container>
            {data && data.map(d => {
                return (<Card key={d.id} image={`https://via.placeholder.com/70`} description={d.description} category={d.category} id={d.id}/>)
            })}
        </Container>
    )
};

export default Carousel