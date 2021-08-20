import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from '../components/styles'


const Welcome = () => {

    return (
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('../assets/img/img2.png')}/>

                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome!</PageTitle>
                    <SubTitle welcome={true}>Bobjoe Jeffryson</SubTitle>
                    <SubTitle welcome={true}>joe.bob@email.com</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('../assets/img/img1.png')} />
                        <Line/>
                        <StyledButton onPress={() => {}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>

                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}

export default Welcome;
