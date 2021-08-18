import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';

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

const Signup = () => {

    const [hidePassword, setHidePassword] = useState(true)

    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Login Page</PageTitle>
                <SubTitle>Account Signup</SubTitle>

                <Formik
                    initialValues={{fullName: '', email: '', dateOfBirth: '', password: '',
                        confirmPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput
                            label="Full Name"
                            icon="person"
                            placeholder="Edwardo McDingle"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('fullName')}
                            onBlur={handleChange('fullName')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <MyTextInput
                            label="Email Address"
                            icon="mail"
                            placeholder="name@email.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleChange('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <MyTextInput
                            label="Date of Birth"
                            icon="calendar"
                            placeholder="YYYY - MM - DD"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleChange('dateOfBirth')}
                            value={values.ateOfBirth}
                        />
                        <MyTextInput
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleChange('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MyTextInput
                            label="Confirm Password"
                            icon="lock"
                            placeholder="* * * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleChange('confirmPassword')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        <Line/>
                        <ExtraView>
                            <ExtraText>Already have an account? </ExtraText>
                            <TextLink>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}

                </Formik>
            </InnerContainer>
        </StyledContainer>
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

export default Signup;
