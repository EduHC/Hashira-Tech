import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 80%;
  height: 40px;

  margin-top: ${RFValue(25)}px;
  padding: 6px;
  
  align-self: center;
  flex-direction: row;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.text};
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#956558'
})`
  width: 80%;

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.text};
`;

export const Logo = styled(Feather).attrs({
  name: 'search'
})`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};

  position: absolute;
  right: 20px;
  bottom: 12px;
`;
