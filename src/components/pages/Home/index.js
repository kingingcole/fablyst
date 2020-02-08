import React from 'react'
import {Container} from "./style";
import Layout from '../../Layout'

import Hero from '../../organisms/HeroSection'
import Carousel from '../../organisms/Carousel'
import Subscribe from '../../molecules/Subscribe'
import HomeGrid from '../../organisms/HomeGrid'
import NewProductsSection from '../../organisms/NewProductsSection'
import PopularProductsSection from '../../organisms/PopularProductsSection'
import HomeImageBanner from '../../molecules/HomeImageBanner'

const Home = () => {
    return (
        <Layout>
            <Container>
                <Hero/>
                <Carousel/>
                <Subscribe/>
                <HomeGrid/>
                <NewProductsSection/>
                <PopularProductsSection/>
                <HomeImageBanner/>
            </Container>
        </Layout>
    )
};

export default Home