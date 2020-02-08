import styled from 'styled-components'


export const Container = styled.section`
    padding-bottom: 20px;
`;

export const Form = styled.form`
    max-width: 400px;
    margin: auto;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    border: 0.5px solid #9B9B9B;
    box-sizing: border-box;
`;

export const Label = styled.label`
    font-size: 14px;
    color: black;
    text-transform: capitalize;
    text-align: left;
    width: 100%;
    display: block;
    margin-bottom: 10px
`;

export const FinePrint = styled.p`
    font-size: 11px;
    color: black;
    text-align: left;
    width: 100%;
    margin: 3px 0 0 0 
`;

export const InputGroup = styled.div`
    margin-bottom: 20px
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: auto;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    border: 0;
    background: #DF0052;
    text-transform: uppercase;
    color: white;
    cursor: pointer
`;

export const FormOptionsContainer = styled(Form)`
    display: flex;
    margin-bottom: 20px
`;

export const FormOption = styled.p`
    color: ${props => props.isHighlighted ? '#DF0052' : 'black'};
    font-size: 15px;
    text-align: left;
    text-transform: uppercase;
    background: #EDEDED;
    margin-right: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: 500
`;

