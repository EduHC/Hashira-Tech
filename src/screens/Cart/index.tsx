import React from 'react';

import {
  Container,
  ProductsList,
  ProductCard,
  ProductImage,
  ProductPrice,
  ProductName,
  TextView,
  QuantityProduct,
  IconCart,
  Line,
  IconRemove,
  IconAdd,
  Resume,
  Total,
  ProductQuantity,
  InvisibleLine,
  TotalsWrapper,
  TotalItems
} from './styles';

import Header from '../../components/Header';
import StepViewer from '../../components/StepViewer';
import Button from '../../components/Button';

interface DataProps {
  id: string;
  name: string;
  price: string;
  img: string;
}

const data: DataProps[] = [
  {
    id: '0',
    name: 'Caixa de Bombom Cacau Show',
    price: '59,90',
    img: 'https://i1.wp.com/hashiratech.com.br/wp-content/uploads/2021/09/foto4-azul.png?fit=384%2C449&ssl=1'
  },
  {
    id: '1',
    name: 'Helloween',
    price: '519,90',
    img: 'https://i1.wp.com/hashiratech.com.br/wp-content/uploads/2021/09/foto4-azul.png?fit=384%2C449&ssl=1'
  }];

export default function Cart() {
  return (
    <Container>
      <Header header_text="Carrinho" />
      <StepViewer />
      <Resume>
        <IconCart />
        <TotalsWrapper>
          <TotalItems>6 Itens</TotalItems>
          <Total>
            <ProductPrice>R$ 1600,00</ProductPrice>
          </Total>
        </TotalsWrapper>
      </Resume>

      <ProductsList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: DataProps) => item.id}
        renderItem={({ item, index }: any) => (
          <>
            <ProductCard
              item_index={index}
              length={data.length}
            >
              <ProductImage source={{ uri: item.img }} />
              <TextView>
                <ProductName>{item.name}</ProductName>
                <ProductPrice>R$ {item.price}</ProductPrice>
              </TextView>
              <QuantityProduct>
                <IconRemove />
                <ProductQuantity>2</ProductQuantity>
                <IconAdd />
              </QuantityProduct>
            </ProductCard>
            {(index + 1) === data.length ? <InvisibleLine /> : <Line />}
          </>
        )}
      />
      <Button button_text="Comprar!"/>
    </Container>
  );
}