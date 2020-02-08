import React from 'react'
import {Form, Input, Label, InputGroup, SubmitButton, CheckBox} from "./style";

const SignIn = () => {
    return (
        <Form>
            <InputGroup>
                <Label htmlFor={`email`}>your E-Mail address</Label>
                <Input type={`email`} id={`email`} />
            </InputGroup>
            <InputGroup>
                <Label htmlFor={`password`}>your password</Label>
                <Input type={`password`} id={`password`} />
            </InputGroup>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px'}}>
                <span style={{fontSize: '14px'}}>I forgot my password</span>
                <div style={{display: 'flex'}}><input type={`checkbox`} id={`checkbox`}/> <Label htmlFor='checkbox' style={{textAlign: 'right'}}>Remember me</Label></div>
            </div>
            <SubmitButton>sign in</SubmitButton>
        </Form>
    )
};

export default SignIn