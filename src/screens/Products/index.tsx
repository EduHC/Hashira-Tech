import React from 'react';

import { 
  Container,
  ProductsList,
  ProductCard,
  ProductImage,
  ProductPrice,
  ProductName,
  TextView
} from './styles';

import { StepViewer } from '../../components/StepViewer';
import { SearchField } from '../../components/SearchField';
import Header from '../../components/Header';

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

export default function Products() {
  return (
    <Container>
      <Header header_text="Produtos"/>
      <StepViewer />
      <SearchField text="Informe o produto..."/>

      <ProductsList 
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item : DataProps) => item.id}
        renderItem={({ item, index } : any) => (
          <ProductCard 
            item_index={index}
            length={data.length}
          >
            <ProductImage source={{ uri: item.img }}/>
            <TextView>
              <ProductName>{item.name}</ProductName>
              <ProductPrice>R$ {item.price}</ProductPrice>
            </TextView>
          </ProductCard>
        )}
      />
    </Container>
  );
}