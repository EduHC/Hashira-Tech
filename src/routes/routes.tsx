import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Cart from '../screens/Cart';
import Products from '../screens/Products';
import Clients from '../screens/Clients';
import Finalization from '../screens/Finalization';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="Products" component={Products}/>
        <Stack.Screen name="Clients" component={Clients}/>
        <Stack.Screen name="Finalization" component={Finalization}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}