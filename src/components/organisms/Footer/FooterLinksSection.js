import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {SaleLink} from '../Nav/style'
import FablystLogo from '../../atoms/FablystLogo'
import FeatherIcon from 'feather-icons-react';


import {ReactComponent as AMEX} from '../../../assets/american express.svg';
import {ReactComponent as DinersClub} from '../../../assets/diners club.svg';
import {ReactComponent as Discover} from '../../../assets/discover.svg';
import {ReactComponent as MasterCard} from '../../../assets/mastercard.svg';
import {ReactComponent as PayPal} from '../../../assets/paypal.svg';
import {ReactComponent as Visa} from '../../../assets/visa.svg';

import {SECOND_BREAKPOINT, THIRD_BREAKPOINT} from "../../../constants";

const FooterLinksSection = () => {
    return (
        <Container>
            {/*<Logo width={`100px`}/>*/}

            <Misc>
                <LinksContainer>
                    <LinksHeading>navigate</LinksHeading>
                    <FooterLink to={`/`}>Women</FooterLink>
                    <FooterLink to={`/`}>Men</FooterLink>
                    <FooterLink to={`/`}>Kids & Babies</FooterLink>
                    <FooterLink to={`/`}>Accessories</FooterLink>
                    <FooterLink to={`/`}>Home</FooterLink>
                    <SaleLink>sale</SaleLink>
                </LinksContainer>
                <LinksContainer>
                    <LinksHeading>information</LinksHeading>
                    <FooterLink to={`/`}>about us</FooterLink>
                    <FooterLink to={`/`}>delivery information</FooterLink>
                    <FooterLink to={`/`}>returns</FooterLink>
                    <FooterLink to={`/`}>privacy & policy</FooterLink>
                    <FooterLink to={`/`}>terms & conditions</FooterLink>
                </LinksContainer>
            </Misc>


            <Misc>
                <LinksContainer>
                    <LinksHeading>customer service</LinksHeading>
                    <FooterLink to={`/`}>customer service</FooterLink>
                    <FooterLink to={`/`}>email sign-up</FooterLink>
                    <FooterLink to={`/`}>size charts</FooterLink>
                    <FooterLink to={`/`}>cookie preferences</FooterLink>
                    <FooterLink to={`/`}>secure online shopping</FooterLink>
                    <FooterLink to={`/`}>site index</FooterLink>
                </LinksContainer>
                <LinksContainer>
                    <LinksHeading>follow us</LinksHeading>
                    <SocialLinksWrapper>
                        <SocialLink href={`https://facebook.com`}><FeatherIcon icon="facebook"
                                                                               size={`18`}/></SocialLink>
                        <SocialLink href={`https://twitter.com`}><FeatherIcon icon="twitter" size={`18`}/></SocialLink>
                        <SocialLink href={`https://instagram.com`}><FeatherIcon icon="instagram"
                                                                                size={`18`}/></SocialLink>
                        <SocialLink href={`https://youtube.com`}><FeatherIcon icon="youtube" size={`18`}/></SocialLink>
                    </SocialLinksWrapper>
                    <br/>
                    <LinksHeading>payment methods</LinksHeading>
                    <PaymentMethodsWrapper>
                        <Visa/>
                        <MasterCard/>
                        <AMEX/>
                        <PayPal/>
                        <Discover/>
                    </PaymentMethodsWrapper>
                </LinksContainer>
            </Misc>

        </Container>
    )
};

export default FooterLinksSection

const Container = styled.section`
    padding: 30px 3%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap:wrap;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        justify-content: center;
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
    justify-content: flex-start;
    flex-direction: column
    };
`;

const LinksContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    text-align: left;
    margin: 0;
    margin-bottom: 30px;
`;

const LinksHeading = styled.p`
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    text-transform: uppercase;
    margin: 0 0 13px 0;
`;

const FooterLink = styled(Link)`
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    color: black;
    text-decoration: none;
    text-transform: capitalize;
`;

const SocialLinksWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 70%;
`;

const SocialLink = styled.a`
    color: black;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    font-size: 1px;
    margin-right: 10px
`;

const PaymentMethodsWrapper = styled(SocialLinksWrapper)`
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Logo = styled(FablystLogo)`
    display: hidden; 
    @media (max-width: ${THIRD_BREAKPOINT}) {
        display: none !important;
        width: 10px
    };
`;

//for responsiveness purposes
//holds two LinksContainers each
const Misc = styled.div`
    display: flex;
    width: 33%;
    justify-content: space-between;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        flex-direction: column;
    };

    @media (max-width: ${THIRD_BREAKPOINT}) {
        width: 100%
    };
`;
