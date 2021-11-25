import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import { StepViewer } from '../../components/StepViewer';
import { SearchField } from '../../components/SearchField';
import api from '../../services/api';

import {
  Container,
  ClientsList,
  ClientCard,
  ClientFone,
  ClientName,
  TextView,
  ClientCpf,
  InvisibleLine,
  Line,
  Header,
  HeaderText
} from './styles';

interface DataProps {
  id: string;
  name: string;
  cpf: string;
  fone: string;
}

const data: DataProps[] = [
  {
    id: '0',
    name: 'Juliana Cristine',
    cpf: '12345678910',
    fone: '9999999'
  },
  {
    id: '1',
    name: 'Karine Mello',
    cpf: '000000000',
    fone: '84987987'
  },
  {
    id: '2',
    name: 'Paulo Friedo',
    cpf: '354654654',
    fone: '03203203'
  },
  {
    id: '3',
    name: 'Marcos Antonio',
    cpf: '216874',
    fone: '49878'
  },
  {
    id: '4',
    name: 'Cthulhu',
    cpf: '66666666666',
    fone: '6666666666'
  },
  {
    id: '5',
    name: 'Larito Kaio',
    cpf: '01010101',
    fone: '66688978978'
  },
  {
    id: '6',
    name: 'Mellitouro Gadin',
    cpf: '697987',
    fone: '9879879887'
  }
];


export default function Products({ navigation }) {
  const [teste, setTeste] = useState({});
  const [selectedClient, setSelectedClient] = useState({});

  async function GetData() {
    try {
      var temp = await api.get('/customers/7');
      setTeste(temp);
    } catch (err) {
      console.log('Error: ' + err.message)
    }
  }

  /*useEffect(() => {
    GetData();
  }, [])*/

  const handleOnPress = (client: DataProps) => {
    setSelectedClient(client);
  }

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
      <SearchField text="Informe o nome do cliente..." />

      <ClientsList
        data={data}
        showsVerticalScrollIndicator={false}
        numColumns={1}
        keyExtractor={(item: DataProps) => item.id}
        renderItem={({ item, index }: any) => (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('Products', item)}
            >
              <ClientCard
                item_index={index}
                length={data.length}
              >
                <ClientName>{item.name}</ClientName>
                <TextView>
                  <ClientCpf>CPF: {item.cpf}</ClientCpf>
                  <ClientFone>Fone: {item.fone}</ClientFone>
                </TextView>
              </ClientCard>
            </TouchableOpacity>
            {(index + 1) === data.length ? <InvisibleLine /> : <Line />}
          </>
        )}
      />
    </Container>
  );
}