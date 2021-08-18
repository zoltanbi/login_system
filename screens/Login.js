import React from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import {Formik} from 'formik';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea
} from '../components/styles'

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/img/img1.png')} />
                <PageTitle>Login Page</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea></StyledFormArea>)}

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}



export default Login;