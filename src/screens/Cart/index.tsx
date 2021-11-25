import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'; 

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
  TotalItems,
  BuyButton,
  ButtonText,
  Header,
  HeaderText
} from './styles';

import { StepViewer } from '../../components/StepViewer';
import { TouchableOpacity } from 'react-native';

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

export default function Cart({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [client, setClient] = useState({});

  useEffect(() => {
    let temporaryArray = [];
    temporaryArray.push(route.params.product);

    setClient(route.params.client);
    setProducts(temporaryArray);
  }, []);

  return (
    <Container>
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
        <HeaderText>Carrinho</HeaderText>
      </Header>
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
        data={products}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: DataProps) => item.id}
        renderItem={({ item, index }: any) => (
          <>
            <ProductCard
              item_index={index}
              length={products.length}
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
            {(index + 1) === products.length ? <InvisibleLine /> : <Line />}
          </>
        )}
      />
      <BuyButton
        onPress={() => navigation.navigate('Finalization', {
          client: client,
          qtdItems: 2,
        })}
      >
        <ButtonText>Comprar</ButtonText>
      </BuyButton>
    </Container>
  );
}