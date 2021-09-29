import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'; 


export const Container = styled.View`
  width: 100%;
  height: ${RFValue(85)}px;

  align-self: center;
  align-items: center;

  flex-direction: row;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(36)}px;

  color: ${({ theme }) => theme.colors.title};

  align-self: center;
`;

export const Arrow = styled(Feather).attrs({
  name: 'arrow-left'
})`
  font-size: ${RFValue(40)}px;

  color: ${({ theme }) => theme.colors.title};

  position: absolute;
  left: ${RFValue(20)}px;
`;