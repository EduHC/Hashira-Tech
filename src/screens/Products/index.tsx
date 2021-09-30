import React from 'react';

import { 
  Container,
  ProductsList
} from './styles';

import { StepViewer } from '../../components/StepViewer';
import { SearchField } from '../../components/SearchField';
import Header from '../../components/Header';

export default function Products() {
  return (
    <Container>
      <Header header_text="Produtos"/>
      <StepViewer />
      <SearchField text="Informe o produto..."/>

      <ProductsList />
    </Container>
  );
}