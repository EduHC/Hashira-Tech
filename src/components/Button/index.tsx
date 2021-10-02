import React from 'react';

import {
  ButtonText,
  LoginButton
} from './styles';

interface Props {
  button_text: string
}

export default function Button({ button_text } : Props) {
  return (
    <LoginButton>
      <ButtonText>{button_text}</ButtonText>
    </LoginButton>
  );
}