import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  
  flex: 1;

  background-color: ${({ theme }) => theme.colors.base_layout};
`;

export const ProductsList = styled.View`
  margin-top: ${RFValue(30)}px;

  align-self: center;

  width: 80%;
  height: 500px;

  background-color: green;
`;