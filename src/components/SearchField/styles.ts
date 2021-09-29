import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  height: 40px;

  margin-top: ${RFValue(45)}px;
  align-self: center;

  background-color: blue;
`;