import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/// SCREENS 
import Supplier from './screens/Supplier';
import Fruits from './screens/Fruits';
import Step1 from './screens/SupplierRegister/Step1';
import Step2 from './screens/SupplierRegister/Step2';
import Step3 from './screens/SupplierRegister/Step3';

/// ICONS
import People from './assets/images/People';
import PeopleRed from './assets/images/PeopleRed';
import Nutrition from './assets/images/Nutrition';
import NutritionRed from './assets/images/NutritionRed';


const Tab = createBottomTabNavigator();

function BottomTab() {
    return(
        <Tab.Navigator 
        initialRouteName='Fornecedor'
        screenOptions={
            {headerShown: false,
            tabBarStyle: {height: 80, paddingBottom: 5}
            }
            }>
            <Tab.Screen 
            name='Fornecedor' 
            component={Supplier}
            options={{
                tabBarIcon: ({focused}) => focused ? <PeopleRed /> : <People />,
                tabBarActiveTintColor: '#da0d1e',
            }}
            />

            <Tab.Screen 
            name='Frutas' 
            component={Fruits} 
            options={{
                tabBarIcon: ({focused}) =>  focused ? <NutritionRed /> : <Nutrition />,
                tabBarActiveTintColor: '#da0d1e'
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
                <Stack.Screen name='Step1' component={Step1}/>
                <Stack.Screen name='Step2' component={Step2}/>
                <Stack.Screen name='Step3' component={Step3}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;