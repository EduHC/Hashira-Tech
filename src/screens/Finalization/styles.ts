import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  
  background-color: ${({ theme }) => theme.colors.base_layout};
`;

export const TopSection = styled.View`
  width: 80%;

  margin-top: ${RFValue(40)}px;
  margin-bottom: ${RFValue(40)}px;
  padding: 10px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.card_background};

  align-self: center;
`;

export const InformativeFields = styled.View`
  margin-bottom: ${RFValue(10)}px;

  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled.View``;

export const QuantityItems = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.text};

  margin-bottom: ${RFValue(10)}px;
`;

export const Subtotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const TotalValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const DiscountSection = styled.View`
  flex-direction: row;
  
  margin-bottom: ${RFValue(20)}px;
`;

export const DiscountLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.title};

  align-self: flex-end;
`;

export const DiscountInput = styled.TextInput.attrs({
  placeholderTextColor: '#956558'
})`
  width: ${RFValue(100)}px;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.placeholder_text};

  margin-left: ${RFValue(10)}px;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.text};
`;

export const ClientSection = styled.View`
  width: 80%;

  align-self: center;

  margin-bottom: ${RFValue(20)}px;
`;

export const ClientName = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail'
})`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;

  text-align: center;
  
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.title};

  margin-bottom: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const ClientEmail = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.title};

  margin-bottom: ${RFValue(20)}px;
`;

export const ClientPhone = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.title};

  margin-bottom: ${RFValue(20)}px;
`;

export const ShippingSection = styled.View`
  width: 80%;

  align-self: center;

  margin-bottom: ${RFValue(40)}px;
`;

export const ShippingTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;

  text-align: left;
  
  margin-bottom: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.title};

  margin-bottom: ${RFValue(10)}px;
`;

export const City = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.title};

  margin-bottom: ${RFValue(10)}px;
`;

export const AddressAdditionalinfo = styled.View`
  flex-direction: row;
`;

export const Postcode = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const State = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  margin-left: ${RFValue(60)}px;

  color: ${({ theme }) => theme.colors.title};
`;
