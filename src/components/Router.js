import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screen Declaration
import Home from '../screens/Home';
import CityDetail from '../screens/CityDetail';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

function ScreenNavigation() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CityDetail" component={CityDetail} />
        </Stack.Navigator>
    );
}


export default function Router() {
    return (
        <NavigationContainer>
            <ScreenNavigation />
        </NavigationContainer>
    );
}