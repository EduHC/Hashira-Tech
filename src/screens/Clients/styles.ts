import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ClientCardProps {
  item_index: number;
  length: number;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  
  background-color: ${({ theme }) => theme.colors.base_layout};
`;

export const ClientsList = styled.FlatList`
  margin-top: ${RFValue(30)}px;

  align-self: center;

  width: 90%;
`;

export const ClientCard = styled.View<ClientCardProps>`
  width: ${RFValue(280)}px;
  height: ${RFValue(120)}px;

  background-color: ${({ theme }) => theme.colors.base_layout};

  margin-bottom: ${RFValue(15)}px;
  margin-top: ${RFValue(10)}px;

  align-items: center;
  align-self: center;
`;

export const TextView = styled.View`
  margin-top: ${RFValue(10)}px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const ClientName = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail'
})`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(30)}px;

  text-align: center;

  color: ${({ theme }) => theme.colors.text};

  margin-top: ${RFValue(10)}px;
`;

export const ClientFone = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.text};

  text-align: center;

  margin-top: ${RFValue(10)}px;
`;

export const ClientCpf = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.text};

  text-align: center;

  margin-top: ${RFValue(10)}px;
  margin-right: ${RFValue(20)}px;
`;

export const InvisibleLine = styled.View`
  height: 0px;
  width: 0px;
`;

export const Line = styled.View`
  width: 80%;
 
  align-self: center;
  
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.title};
`;

export const Header = styled.View`
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