import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.base_layout};
  
  height: 100%;
  
  flex: 1;
`;

export const TopImages = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.base_layout};
  margin-bottom: ${RFPercentage(10)}px;
`;

export const TextIntro = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 80%;
  
  margin-bottom: ${RFValue(80)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(36)}px;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 5px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 5px;
`;

export const LoginSection = styled.View`
  width: 90%;
  
  margin-bottom: ${RFValue(50)}px;
  padding: 22px;

  align-self: center;
`;

export const NameInput = styled.TextInput.attrs({
  placeholder: 'Vendedor...',
  placeholderTextColor: '#956558'
})`
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: ${RFPercentage(6)}px;
`;

export const PasswordInput = styled.TextInput.attrs({
  placeholder: 'Senha...',
  placeholderTextColor: '#956558'
})`
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

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