import React from 'react'
import {Form, Input, Label, InputGroup, SubmitButton, CheckBox, FinePrint} from "./style";

const SignUp = () => {
    return (
        <Form>
            <InputGroup>
                <Label htmlFor={`email`}>your E-Mail address *</Label>
                <Input type={`email`} id={`email`} />
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`password`}>create password *</Label>
                <Input type={`password`} id={`password`} />
                <FinePrint>Password must be 8-20 characters, including: at least one capital letter, at least one small letter, one number and one special character - ! @ # $ % ^ & * ( ) _ +</FinePrint>
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`confirm_password`}>confirm password *</Label>
                <Input type={`password`} id={`confirm_password`} />
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`first_name`}>first name *</Label>
                <Input type={`text`} id={`first_name`} />
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`surname`}>surname *</Label>
                <Input type={`text`} id={`surname`} />
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`postcode`}>postcode</Label>
                <Input type={`text`} id={`postcode`} />
            </InputGroup>
            <SubmitButton>save</SubmitButton>
        </Form>
    )
};

export default SignUp