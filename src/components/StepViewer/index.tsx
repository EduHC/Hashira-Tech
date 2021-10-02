import React from 'react';
import Svg from 'react-native-svg';

import {
   Container,
   BallOne,
   BallTwo,
   BallThree,
   BallFour
  } from './styles';

export default function StepViewer() {
  return (
    <Container>
      <Svg >
        <BallOne />
        <BallTwo />
        <BallThree />
        <BallFour />
      </Svg>
    </Container>
  ); 
}