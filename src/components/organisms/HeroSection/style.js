import styled from 'styled-components'
import {THIRD_BREAKPOINT, FOURTH_BREAKPOINT} from "../../../constants";

export const HeroSection = styled.section` 
    background: #DDD;
    height: 500px;
    width: 100%;
    border-bottom-right-radius: 200px;
    margin: 0 0 20px 0;
    padding-right: 60px;
    box-sizing: border-box;

    @media (max-width: ${THIRD_BREAKPOINT}) {
        height: 400px;
        border-radius: 0
    };

    @media (max-width: ${FOURTH_BREAKPOINT}) {
        padding-right: 30px
    };
`;