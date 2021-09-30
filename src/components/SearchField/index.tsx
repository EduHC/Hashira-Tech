import React from 'react';
import { TextInputProps } from 'react-native';

import { 
  Container,
  SearchInput,
  Logo
} from './styles';

interface Props extends TextInputProps {
  text: string;
}

export function SearchField({
  text
} : Props) {
  return (
    <Container >
      <SearchInput placeholder={text}/>
      <Logo />
    </Container>
  ); 
}