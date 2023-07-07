import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//SCREENS 
import Supplier from './screens/Supplier';
import Fruits from './screens/Fruits';

const Tab = createBottomTabNavigator();

function BottomTab() {
    return(
        <Tab.Navigator 
        initialRouteName='Fornecedor'
        screenOptions={{headerShown: false}}>
            <Tab.Screen name='Fornecedor' component={Supplier} />
            <Tab.Screen name='Frutas' component={Fruits} />
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{headerShown: false}}
            >
                <Stack.Screen name='BottomTab' component={BottomTab}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;