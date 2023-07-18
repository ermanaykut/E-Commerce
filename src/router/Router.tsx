import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Splash from '../screens/Auth/Splash';
import Products from '../screens/Product/Products';
import ProductDetail from '../screens/Product/ProductDetail';
import {Provider} from 'react-redux';
import store from '../store';
import Cart from '../screens/Cart';
import Categories from '../screens/Categories';
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;