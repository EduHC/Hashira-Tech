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
import Routes from './src/routes/routes';

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
      <Routes />
    </ThemeProvider>
  );
}