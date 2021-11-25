import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Button } from '../../components/Button';

import {
  Container,
  TopSection,
  InformativeFields,
  LeftSide,
  QuantityItems,
  Subtotal,
  TotalValue,
  DiscountSection,
  DiscountLabel,
  DiscountInput,
  ClientSection,
  ClientName,
  ClientEmail,
  ClientPhone,
  ShippingSection,
  ShippingTitle,
  Address,
  City,
  AddressAdditionalinfo,
  Postcode,
  State,
  Header,
  HeaderText,
  ButtonText,
  FinalizeButton
} from './styles';
import { TouchableOpacity } from 'react-native';

export default function Finalization({ route, navigation }) {
  return (
    <Container >
      <Header>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 20,
            top: 25
          }}
          onPress={() => navigation.goBack()}
        >
          <Feather
            name="arrow-left"
            color="#6B2F23"
            size={30}
          />
        </TouchableOpacity>
        <HeaderText>Finalização</HeaderText>
      </Header>
      <TopSection>
        <InformativeFields>
          <LeftSide>
            <QuantityItems>{route.params.qtdItems} Itens</QuantityItems>
            <Subtotal>Subtotal: R$ 200,00</Subtotal>
          </LeftSide>
          <TotalValue>Total: R$ 200,00</TotalValue>
        </InformativeFields>
        <DiscountSection>
          <DiscountLabel>Desconto: R$ </DiscountLabel>
          <DiscountInput
            placeholder="Insira o valor"
          />
        </DiscountSection>
      </TopSection>
      <ClientSection>
        <ClientName>{route.params.client.name}</ClientName>
        <ClientEmail>Cpf: {route.params.client.cpf}</ClientEmail>
        <ClientPhone>Fone: {route.params.client.fone}</ClientPhone>
      </ClientSection>
      <ShippingSection>
        <ShippingTitle>Entrega:</ShippingTitle>
        <Address>Endereço: Rua dos Carvalhos</Address>
        <City>Cidade: Cascavel</City>
        <AddressAdditionalinfo>
          <Postcode>CEP: 855555</Postcode>
          <State>UF: Universo</State>
        </AddressAdditionalinfo>
      </ShippingSection>
      <FinalizeButton
        onPress={() => navigation.navigate('Clients')}
      >
        <ButtonText>Finalizar</ButtonText>
      </FinalizeButton>
    </Container>
  )
}
