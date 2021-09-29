import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const LoginButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: ${({ theme }) => theme.colors.components};

  width: 45%;
  height: 60px;

  border-radius: 8px;

  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(24)}px;
  
  color: ${({ theme }) => theme.colors.button_text};
  letter-spacing: 3px;
`;