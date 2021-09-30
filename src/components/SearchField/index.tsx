import React from 'react';

import { 
  Container,
  SearchInput,
  Logo
} from './styles';

interface Props {
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