import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/// SCREENS 
import Supplier from './screens/Supplier';
import Fruits from './screens/Fruits';

/// ICONS
import People from './assets/People';
import Nutrition from './assets/Nutrition';

const Tab = createBottomTabNavigator();

function BottomTab() {
    return(
        <Tab.Navigator 
        initialRouteName='Fornecedor'
        screenOptions={
            {headerShown: false,
            tabBarStyle: {height: 80}
            }
            }>
            <Tab.Screen 
            name='Fornecedor' 
            component={Supplier}
            options={{
                tabBarIcon: ({focused}) => <People color={focused ? '#da0d1e' : '#383b3d'}/>
            }}
            />

            <Tab.Screen 
            name='Frutas' 
            component={Fruits} 
            options={{
                tabBarIcon: ({focused}) => <Nutrition color={focused ? '#da0d1e' : '#383b3d'}/>
            }}
            />

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