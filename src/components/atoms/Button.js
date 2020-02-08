import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import {SECOND_BREAKPOINT} from "../../constants";


const Button = ({ color, borderColor, background, children, url, hidePadding, fontSize }) => {
    //this is a Link component that accepts a `to` argument which represents the url to link to
    //note this should be used for only internal routing

    return (
        <Btn color={color} borderColor={borderColor} background={background} to={url} hidePadding={hidePadding} fontSize={fontSize}>{children}</Btn>
    )
};

export default Button

const Btn = styled(Link)`
    text-transform: uppercase;
    border-radius: 2px;
    color: ${props => props.color};
    background: ${props => props.background};
    border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : ''};
    padding: ${props => props.hidePadding ? '' : '10px 20px'};
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    line-height: 20px;
    box-sizing: border-box;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
    font-size: 12px;
    }
`;