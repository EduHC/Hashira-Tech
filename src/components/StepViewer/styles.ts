import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 60%;
  height: ${RFValue(20)}px;

  align-self: center;

  margin-top: ${RFValue(45)}px;
  background-color: red;
`;