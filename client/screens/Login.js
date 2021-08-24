import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, ActivityIndicator} from 'react-native';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

//formik
import {Formik} from 'formik';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
} from '../components/styles'

// Colors
const { brand, darkLight, primary } = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

// API client
import axios from 'axios';

const Login = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true)
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleLogin = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = 'https://sleepy-lake-94908.herokuapp.com/user/signin';

        axios.post(url, credentials)
            .then((response) => {
                const result = response.data;
                const {message, status, data} = result;

                if (status !== 'SUCCESS') {
                    handleMessage(message, status);
                } else {
                    navigation.navigate('Welcome', {...data[0]})
                }
                setSubmitting(false);
            })
            .catch(error => {
                console.log(error.JSON());
                setSubmitting(false);
                handleMessage("An error occurred. Check your network and try again");
            })
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('../assets/img/img1.png')} />
                    <PageTitle>Login Page</PageTitle>
                    <SubTitle>Account Login</SubTitle>

                    <Formik
                        initialValues={{email: '', password: ''}}
                        onSubmit={(values, {setSubmitting}) => {
                            if (values.email == '' || values.password == '') {
                                handleMessage('Please fill all the fields');
                                setSubmitting(false);
                            } else {
                                handleLogin(values, setSubmitting)
                            }
                        }}
                    >{({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="name@email.com"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox type={messageType}>{message}</MsgBox>

                            {!isSubmitting && <StyledButton onPress={handleSubmit}>
                                <ButtonText>Login</ButtonText>
                            </StyledButton>}

                            {isSubmitting && <StyledButton disabled={true}>
                                <ActivityIndicator size="large" color={primary}/>
                            </StyledButton>}

                            <Line/>
                            <StyledButton google={true} onPress={handleSubmit}>
                                <Fontisto name="google" color={primary} size={25}/>
                                <ButtonText google={true}>Sign in with Google</ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>Don't have an account already? </ExtraText>
                                <TextLink onPress= {() => navigation.navigate("Signup")}>
                                    <TextLinkContent>Signup</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>)}

                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'}size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Login;
