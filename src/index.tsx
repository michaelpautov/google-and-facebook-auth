import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { Routers } from '@/components/routers';

export const App = () => (
  <NavigationContainer>
    <Routers />
  </NavigationContainer>
);
