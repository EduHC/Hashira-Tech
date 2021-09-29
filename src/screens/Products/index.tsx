import React from 'react';

import { 
  Container,
  ProductsList
} from './styles';

import { StepViewer } from '../../components/StepViewer';
import { SearchField } from '../../components/SearchField';
import { Text } from 'react-native';

const produtos = [1, 2, 3, 4]

export default function Products() {
  return (
    <Container>
      <StepViewer />
      <SearchField />

      <ProductsList 
        data={produtos} 
        keyExtractor={produto => String(produto)}
        renderItem={(produto) => {
          return (
            <Text>{produto}</Text>
          )
        }}
      />
    </Container>
  );
}