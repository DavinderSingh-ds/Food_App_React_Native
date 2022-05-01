import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();

const navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchSc">

        <Stack.Screen 
            name="SearchSc"
            component={SearchScreen} 
            options={{ title: 'Business Search' }}
            />

        <Stack.Screen 
            name="ResultsShow"
            component={ResultsShowScreen} 
            options={{ title: 'Results Show' }}
            />    

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default navigator;