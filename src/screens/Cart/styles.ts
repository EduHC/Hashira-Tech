import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

interface ProductCardProps {
  item_index: number;
  length: number;
}

export const IconCart = styled(MaterialIcons).attrs({
    name:'add-shopping-cart'
})`
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.title};

    margin-left: ${RFValue(30)}px;
`;

export const IconAdd = styled(MaterialIcons).attrs({
    name:'add'
})`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.title};
    padding: ${RFValue(10)}px;
`;

export const IconRemove = styled(MaterialIcons).attrs({
    name:'remove'
})`
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.title};
    padding: ${RFValue(12)}px;
`;

export const TotalItems = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const TotalsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 10px;

  width: ${RFValue(250)}px;
`;

export const Resume = styled.View`
  width: 100%;
  height: ${RFValue(150)}px;
  
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled.View`
  width: ${RFValue(120)}px;
  height: ${RFValue(50)}px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  margin-right: ${RFValue(20)}px;
`;

export const Container = styled.View`
  width: 100%;

  
  margin-bottom: 40px;

  background-color: ${({ theme }) => theme.colors.base_layout};
`;

export const ProductsList = styled.FlatList`
  align-self: center;
  margin-bottom: ${RFValue(30)}px;

  width: 100%;
  height: 40%;
`;

export const ProductCard = styled.View<ProductCardProps>`
  width: ${RFValue(100)}px;
  height: ${RFValue(150)}px;

  padding: ${RFValue(10)}px;
 
  align-items: center;
  flex-direction: row;
`;

export const ProductImage = styled.Image`  
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
`;

export const InvisibleLine = styled.View`
  height: 0px;
  width: 0px;
`;

export const TextView = styled.View`
  width: ${RFValue(130)}px;
  margin-top: ${RFValue(10)}px;
  margin-left: ${RFValue(25)}px;

  justify-content: center;
  align-items: flex-start;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail'
})`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;

  text-align: left;

  color: ${({ theme }) => theme.colors.text};
`;

export const ProductPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.title};

  text-align: center;
`;

export const ProductQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const QuantityProduct = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(45)}px;

  margin-left: ${RFValue(10)}px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  width: 80%;
 
  align-self: center;
  
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.text};
`;

export const BuyButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: ${({ theme }) => theme.colors.components};

  width: 45%;
  height: 60px;

  margin-bottom: ${RFValue(100)}px;

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