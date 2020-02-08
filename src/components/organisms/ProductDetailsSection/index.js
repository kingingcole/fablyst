import React, {useState} from 'react';
import {
    Container,
    ProductDetailsProper, Detail,
    Title, Category,
    DiscountedPrice, OldPrice,
    ColorBadge, Label,
    SizeBadge, Dropdown,
    AddToCartButton, Description,

    //for image preview
    ImagesContainer, Image,
    ImageCard, ImageCardsHolder
} from "./style";
import {ReactComponent as Basket} from '../../../assets/white_basket.svg'


const customStyle = {display: 'flex', justifyContent: 'flex-start'};

//dummy product data
const dummyProduct = {
    id: 1,
    title: 'Floral print wrap dress',
    category: 'women',
    price: 44.65,
    discountedPrice: 34.44,
    images: [
        {
            id: 1,
            url: 'https://via.placeholder.com/450',
        },
        {
            id: 2,
            url: 'https://via.placeholder.com/350',
        },
        {
            id: 3,
            url: 'https://via.placeholder.com/250',
        },
        {
            id: 1,
            url: 'https://via.placeholder.com/150',
        },
    ],
    colors: ['#C6C6C6', 'yellow', 'red'],
    sizes: [32, 33, 35],
    quantityAvailable: 4,
    isAvailable: false,
};

const ProductDetailsSection = () => {

    const [product, setProduct] = useState(dummyProduct);

    const options = [];
    for (let i = 1; i <= product.quantityAvailable; i++){
        options.push(<option value={i}>{i}</option>)
    }

    return (
        <Container>
            <ImagesContainer>
                <ImageCardsHolder>
                    {product.images && product.images.map(image => <ImageCard src={image.url}/>)}
                </ImageCardsHolder>
                <Image src={`https://via.placeholder.com/450`}/>
            </ImagesContainer>
            <ProductDetailsProper>
                <Detail>
                    <Category>{product.category}</Category>
                    <Title>Floral print wrap dress</Title>
                </Detail>
                <Detail>
                    <OldPrice>${product.price}</OldPrice>
                    <DiscountedPrice>${product.discountedPrice}</DiscountedPrice>
                </Detail>
                <Detail>
                    <Label>Color:</Label>
                    <div style={customStyle}>
                        {product.colors && product.colors.map(color => <ColorBadge color={color}/>)}
                    </div>
                </Detail>
                <Detail>
                    <Label>Size:</Label>
                    <div style={customStyle}>
                        {product.sizes && product.sizes.map(size => <SizeBadge>{size}</SizeBadge>)}
                    </div>
                </Detail>
                <Detail>
                    <Label>Quantity:</Label>
                    <div style={{customStyle}}>
                        <Dropdown>
                            {options}
                        </Dropdown>
                        <AddToCartButton disabled={!product.isAvailable} background={product.is}>
                            {product.isAvailable && <Basket style={{height: '20px', marginRight: '5px'}}/>}
                            {product.isAvailable ? 'Add to cart' : 'Out of stock'}
                        </AddToCartButton>
                    </div>
                </Detail>
                <Detail hideBorder={true}>
                    <Label>Description:</Label>
                    <Description>Lore impusm dolor sit amet</Description>
                </Detail>
            </ProductDetailsProper>
        </Container>
    )
};

export default ProductDetailsSection