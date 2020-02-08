import React, {useState} from 'react'
import {NavBar, TopNav, BottomNav, NavLink, BagLogo, SaleLink} from './style'
import logo from '../../../assets/logo.png'
import Search from './search'
import FablystLogo from '../../atoms/FablystLogo'
import styled from 'styled-components'
import {THIRD_BREAKPOINT} from "../../../constants";
import FeatherIcon from "feather-icons-react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuOpen = () => {
        if (isOpen) {
            setIsOpen(false);
        }else{
            setIsOpen(true)
        }
    };

    const icon = isOpen ? 'x' : 'menu';
    const menuText = isOpen ? 'CLOSE' : 'MENU';

    return (
        <NavBar>
            <TopNav>
                <FablystLogo />
                <Search/>
                <Misc style={{}}>
                    <NavLink style={{marginRight: '13px'}} to={'/login'}>Sign in/Sign up</NavLink>
                    <BagLogo />
                </Misc>
                <MenuButton onClick={handleMenuOpen}>
                    <FeatherIcon icon={icon}
                                 size={`20`}
                    /> <MenuText>{menuText}</MenuText>
                </MenuButton>
            </TopNav>
            <BottomNav isOpen={isOpen}>
                    <NavLink>New</NavLink>
                    <NavLink>Women</NavLink>
                    <NavLink>Men</NavLink>
                    <NavLink>Kids</NavLink>
                    <SaleLink>Sale</SaleLink>
            </BottomNav>
        </NavBar>
    )
};


const MenuButton = styled.div`
    display: none;
    cursor: pointer;
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        display: flex;
        align-items: center
    };
`;

const MenuText = styled.span`
    font-size: 10px;
    margin-left: 5px
`;

const Misc = styled.div`
    display: flex; 
    align-items: center;
    @media (max-width: ${THIRD_BREAKPOINT}) {
        display: none
    };
`;

export default Navbar