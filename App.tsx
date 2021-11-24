import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Rajdhani_400Regular,
  Rajdhani_500Medium
} from '@expo-google-fonts/rajdhani';

import theme from './src/global/styles/theme';
import Login from './src/screens/Login';
import Cart from './src/screens/Cart';
import Products from './src/screens/Products';
import Clients from './src/screens/Clients';
import Finalization from './src/screens/Finalization';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_400Regular,
    Rajdhani_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden={true} />
      <Finalization />
    </ThemeProvider>
  );
}