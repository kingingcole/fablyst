import React from 'react'
import Layout from '../../Layout'
import RecommendedProductsSection from '../../organisms/RecommendedProductsSection'
import ProductDetailsSection from '../../organisms/ProductDetailsSection'


const ProductDetail = () => {
    return (
        <Layout>
            <ProductDetailsSection />
            <RecommendedProductsSection />
        </Layout>
    )
};

export default ProductDetail
