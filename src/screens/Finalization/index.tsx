import React from 'react';

import Header from '../../components/Header';
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
  State
} from './styles';

export default function Finalization() {
  return (
    <Container >
      <Header header_text="Finalização" />
      <TopSection>
        <InformativeFields>
          <LeftSide>
            <QuantityItems>8 Itens</QuantityItems>
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
        <ClientName>Great Old One Cthulhu</ClientName>
        <ClientEmail>Email: tchutchuco.hell@hellzin.end</ClientEmail>
        <ClientPhone>Fone: (66) 96666-6666</ClientPhone>
      </ClientSection>
      <ShippingSection>
        <ShippingTitle>Entrega:</ShippingTitle>
        <Address>Endereço: Rua dos Caralhos</Address>
        <City>Cidade: Sua mãe</City>
        <AddressAdditionalinfo>
          <Postcode>CEP: 855555</Postcode>
          <State>UF: Universo</State>
        </AddressAdditionalinfo>
      </ShippingSection>
      <Button button_text="Finalizar" />
    </Container>
  )
}
