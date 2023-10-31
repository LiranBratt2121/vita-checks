import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faInfo, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import LoginScreen from '../vita-checks/Screens/LoginScreen';
import SignUpScreen from '../vita-checks/Screens/SignUpScreen';
import HomeScreen from '../vita-checks/Screens/HomeScreen';
import AboutScreen from '../vita-checks/Screens/AboutScreen';

const Tab = createBottomTabNavigator();

const theme = extendTheme({
  colors: {
    primary: {
      500: '#000000',
    },
  },
});

const FaIcon = ({ icon, color, size }) => (
  <FontAwesomeIcon icon={icon} color={color} size={size} />
);

const icons = {
  Home: faHome,
  About: faInfo,
  Login: faUser,
  SignUp: faUserPlus,
};

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarStyle: { backgroundColor: theme.colors.primary[500] },
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'gray',
          }}
        >
          {Object.keys(icons).map((name) => (
            <Tab.Screen
              key={name}
              name={name}
              component={name === 'Home' ? HomeScreen : name === 'About' ? AboutScreen : name === 'Login' ? LoginScreen : SignUpScreen}
              options={{
                tabBarLabel: name,
                tabBarIcon: ({ color, size }) => (
                  <FaIcon icon={icons[name]} color={color} size={size} />
                ),
              }}
            />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
