import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Home } from '@/screens';

const Stack = createNativeStackNavigator();

export const Routers = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);
