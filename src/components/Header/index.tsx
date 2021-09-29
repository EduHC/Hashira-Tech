import React from 'react';

import { 
  Container,
  HeaderText,
  Arrow
} from './styles';

interface Props {
  header_text: string;
}

export function Header({ header_text } : Props) {
  return (
    <Container>
      <Arrow />
      <HeaderText>{header_text}</HeaderText>
    </Container>
  );
}

export default Header;