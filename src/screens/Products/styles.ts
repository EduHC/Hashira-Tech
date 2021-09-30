import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ProductCardProps {
  item_index: number;
  length: number;
}

export const Container = styled.View`
  width: 100%;
  height: 100%;
  
  background-color: ${({ theme }) => theme.colors.base_layout};
`;

export const ProductsList = styled.FlatList`
  margin-top: ${RFValue(30)}px;

  align-self: center;

  width: 90%;
`;

export const ProductCard = styled.View<ProductCardProps>`
  width: ${RFValue(150)}px;
  height: ${RFValue(220)}px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 20px;

  margin-right: ${({ item_index }) => item_index % 2 === 0 ? 20 : 0}px;
  margin-bottom: 20px;
  padding: 10px;

  flex: ${({ item_index, length }) => (item_index + 1) === length ? 0.5 : 1};
  align-items: center;
`;

export const ProductImage = styled.Image`
  margin-top: ${RFValue(5)}px;
  
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
`;

export const TextView = styled.View`
  margin-top: ${RFValue(10)}px;

  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail'
})`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;

  text-align: center;

  color: ${({ theme }) => theme.colors.text};

  margin-top: ${RFValue(10)}px;
`;

export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.text};

  text-align: center;

  margin-top: ${RFValue(10)}px;
`;
