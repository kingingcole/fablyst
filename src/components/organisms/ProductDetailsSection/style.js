import styled from 'styled-components'
import {ReactComponent as Basket} from '../../../assets/basket.svg'
import {FIRST_BREAKPOINT, THIRD_BREAKPOINT} from "../../../constants";

export const Container = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 50px;
    height: auto;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        flex-direction: column;
        width: 100%
    };
`;

export const ProductDetailsProper = styled.div`
    width: 40%;
    box-sizing: border-box;
    padding-left: 5px;
    text-align: left;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%
    };
`;

export const Detail = styled.div`
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    padding: 15px 0;
    border-bottom: ${props => props.hideBorder ? '' : '0.2px solid #9B9B9B'};
    margin: 0;
`;

export const Category = styled.p`
    font-weight: normal;
    font-size: 14px;
    color: #363636;
    margin: 0;
`;

export const Title = styled.p`       
    font-weight: 600;
    font-size: 23px;
    color: #303030;
    margin: 5px 0 0 0;
    text-transform: capitalize;
`;

export const OldPrice = styled.p` 
    font-weight: normal;
    font-size: 20px;
    color: #9B9B9B;
    margin: 0;
    font-weight: 500
`;

export const DiscountedPrice = styled.p` 
    font-weight: normal;
    font-size: 23px;
    color: pink;
    margin: 0;
    font-weight: 500
`;

export const Label = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #363636;
    margin: 0 0 10px 0;
    padding: 0
`;

export const Description = styled.p`
    font-size: 15px;
    padding: 0;
    margin: 0
`;

export const ColorBadge = styled.span`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 7px;
    background: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer
`;

export const SizeBadge = styled.span`
    width: 25px;
    height: 25px;
    margin-right: 7px;
    background: #EDECEC;
    color: #545454;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Dropdown = styled.select`
    background: #EDECEC;
    padding: 8px;
    border: none;
    margin-right: 10px;
    cursor: pointer;
`;

export const AddToCartButton = styled.button`
    padding: 10px 20px;
    border: 0;
    background: ${props => props.background};
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 10px
`;


//for product image preview
export const ImagesContainer = styled.div`
    width: 60%;
    display: flex;
    box-sizing: border-box;
    margin-right: 10px;
    
    @media (max-width: ${FIRST_BREAKPOINT}){
        flex-direction: column-reverse
    }; 
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%
    };
`;

export const Image = styled.img`
    width: 85%;
    box-sizing: border-box;
    background: #C9C9C9;
    border-radius: 2px;
    height: 100%;
    margin-left: 10px;
    padding: 0;
    
    @media (max-width: ${FIRST_BREAKPOINT}){
        width: auto;
        margin: 0 0 10px 0
    }; 
`;

export const ImageCardsHolder = styled.div`
    width: 15%;
    box-sizing: border-box;
    height: 500px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: scroll;
    //hide scrollbar
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    
    @media (max-width: ${FIRST_BREAKPOINT}){
        flex-direction: row;
        width: 100%;
        height: 70px;
        justify-content: flex-start;
        overflow-x: scroll
    }; 
`;

export const ImageCard = styled.img`
    width: auto;
    box-sizing: border-box;
    margin: 0;
    margin-bottom: 10px;
    background: #C9C9C9;
    height: 110px;
    cursor: pointer;
    
    @media (max-width: ${FIRST_BREAKPOINT}){
        flex-direction: row;
        height: 100%;
        margin-right: 5px
    }; 
`;