import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import {
  Container,
  ProductsList,
  ProductCard,
  ProductImage,
  ProductPrice,
  ProductName,
  TextView,
  Header,
  HeaderText
} from './styles';

import { StepViewer } from '../../components/StepViewer';
import { SearchField } from '../../components/SearchField';
import api from '../../services/api';


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
  },
  {
    id: '2',
    name: 'Combo Bis + Barra de Chocolate',
    price: '159,90',
    img: 'https://i1.wp.com/hashiratech.com.br/wp-content/uploads/2021/09/foto4-azul.png?fit=384%2C449&ssl=1'
  },
  {
    id: '3',
    name: 'Doces alucinógicos de delirantes',
    price: '9,90',
    img: 'https://i1.wp.com/hashiratech.com.br/wp-content/uploads/2021/09/foto4-azul.png?fit=384%2C449&ssl=1'
  },
  {
    id: '4',
    name: 'Cilício de inox coberto de chocolate',
    price: '666,69',
    img: 'https://i1.wp.com/hashiratech.com.br/wp-content/uploads/2021/09/foto4-azul.png?fit=384%2C449&ssl=1'
  },
  {
    id: '5',
    name: 'Cilício de inox coberto de chocolate',
    price: '666,69',
    img: 'https://i1.wp.com/hashiratech.com.br/wp-content/uploads/2021/09/foto4-azul.png?fit=384%2C449&ssl=1'
  },
  {
    id: '6',
    name: 'Cilício de inox coberto de chocolate',
    price: '666,69',
    img: 'https://i1.wp.com/hashiratech.com.br/wp-content/uploads/2021/09/foto4-azul.png?fit=384%2C449&ssl=1'
  }
];



export default function Products({ route, navigation }) {
  const [teste, setTeste] = useState({});
  const [client, setClient] = useState({});

  async function GetData() {
    try {
      var temp = await api.get('/products/153');
      setTeste(temp);
    } catch (err) {
      console.log('Error: ' + err.message)
    }
  }

  useEffect(() => {
     setClient(route.params)
   }, [])



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
        <HeaderText>Clientes</HeaderText>
      </Header>
      <StepViewer />
      <SearchField text="Informe o produto..." />

      <ProductsList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item: DataProps) => item.id}
        renderItem={({ item, index }: any) => (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart', {
                client: client,
                product: item
              })}
            >
              <ProductCard
                item_index={index}
                length={data.length}
              >
                <ProductImage source={{ uri: item.img }} />
                <TextView>
                  <ProductName>{item.name}</ProductName>
                  <ProductPrice>R$ {item.price}</ProductPrice>
                </TextView>
              </ProductCard>
            </TouchableOpacity>
          </>
        )}
      />
    </Container>
  );
}