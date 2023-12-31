import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "./assets/colors/styles";

/// SCREENS
import Supplier from "./screens/Supplier";
import Fruits from "./screens/Fruits";
import Step1 from "./screens/SupplierRegister/Step1";
import Step2 from "./screens/SupplierRegister/Step2";
import Step3 from "./screens/SupplierRegister/Step3";
import Step4 from "./screens/SupplierRegister/Step4";
import LestStep from "./screens/SupplierRegister/LestStep";
import ResgistrationSuccess from "./screens/RegistrationSuccess";

/// ICONS
import People from "./assets/images/People";
import PeopleRed from "./assets/images/PeopleRed";
import Nutrition from "./assets/images/Nutrition";
import NutritionRed from "./assets/images/NutritionRed";

import HooksProvider from "./hooks";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Fornecedor"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 80, paddingBottom: 5 },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Supplier"
        component={Supplier}
        options={{
          tabBarIcon: ({ focused }) => (focused ? <PeopleRed /> : <People />),
          tabBarActiveTintColor: "#da0d1e",
          title: "Fornecedor",
        }}
      />

      <Tab.Screen
        name="Fruits"
        component={Fruits}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <NutritionRed /> : <Nutrition />,
          tabBarActiveTintColor: "#da0d1e",
          title: "Frutas",
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.Backgroud} barStyle="dark-content" />
      <HooksProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="Step1" component={Step1} />
          <Stack.Screen name="Step2" component={Step2} />
          <Stack.Screen name="Step3" component={Step3} />
          <Stack.Screen name="Step4" component={Step4} />
          <Stack.Screen name="LestStep" component={LestStep} />
          <Stack.Screen
            name="ResgistrationSuccess"
            component={ResgistrationSuccess}
          />
        </Stack.Navigator>
      </HooksProvider>
    </NavigationContainer>
  );
}

export default App;
