import styled from 'styled-components'
import {SECOND_BREAKPOINT, THIRD_BREAKPOINT} from "../../constants";

export const Container = styled.main`
    padding: 6%;
    padding-top: 180px;
    margin-top: 0;
    box-sizing: border-box;
    
    @media (max-width: ${SECOND_BREAKPOINT}) {
        padding-top: 160px
    };
    
    @media (max-width: ${THIRD_BREAKPOINT}) {
        padding-top: 90px
    };
`;