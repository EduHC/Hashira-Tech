import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  TopImages,
  TextIntro,
  Title,
  Subtitle,
  LoginSection,
  NameInput,
  PasswordInput
} from './styles';

import { Button } from '../../components/Button';

export default function Login(){
  return (
    <Container>
      <TopImages>
        <Image 
          source={require('../../assets/login_png_2.png')}
          style={{
            position: 'absolute'
          }}
        />
        <Image source={require('../../assets/login_png_1.png')}/>
      </TopImages>

      <TextIntro>
        <Title>Hashira Tech</Title>
        <Subtitle>Força de Vendas</Subtitle>
      </TextIntro>

      <LoginSection >
        <NameInput />
        <PasswordInput />
      </LoginSection>
            
      <Button button_text="Entrar"/>
    </Container>
  );
}