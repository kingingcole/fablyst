import React, {useState} from 'react'
import {Container} from "./style";
import Layout from '../../Layout'
import SignIn from './SignIn'
import SignUp from './SignUp'
import {FormOptionsContainer, FormOption} from "./style";


const Auth = () => {

    const [formToShow, setFormToShow] = useState('sign_in');

    const handleShowForm = (form) => setFormToShow(form);

    return (
        <Layout>
            <Container>
                <FormOptionsContainer>
                    <FormOption onClick={() => handleShowForm('sign_in')} isHighlighted={formToShow==='sign_in'}>Sign In</FormOption>
                    <FormOption onClick={() => handleShowForm('sign_up')} isHighlighted={formToShow==='sign_up'}>Create account</FormOption>
                </FormOptionsContainer>
                {formToShow === 'sign_in' ? <SignIn/> : <SignUp/>}
            </Container>
        </Layout>
    )
};

export default Auth