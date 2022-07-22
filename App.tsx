/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SignIn from './src/screens/SignIn';
import SignInWithNumber from './src/screens/SignInWithNumber';
import SignInVerification from './src/screens/SignInVerification';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from './src/components/MyTabbar';
import Orders from './src/screens/Orders';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Orders}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <Icon name="shopping-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Orders}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => <Icon name="cart" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Orders}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="favorite" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Orders}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignInWithNumber" component={SignInWithNumber} />
        <Stack.Screen
          name="SignInVerification"
          component={SignInVerification}
        />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeScreen" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
