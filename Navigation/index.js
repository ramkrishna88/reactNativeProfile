import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {HomeScreen, DetailsScreen} from '../screens';

const Tab = createBottomTabNavigator();

const HomeIcon = ({focused, color, size}) => (
  <Ionicons
    name={focused ? 'home' : 'home-outline'}
    size={size}
    color={color}
  />
);

const DetailsIcon = ({focused, color, size}) => (
  <Ionicons
    name={focused ? 'menu' : 'menu-outline'}
    size={size}
    color={color}
  />
);

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: 'green',
            height: 90,
          },
        }}
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return <HomeIcon focused={focused} color={color} size={size} />;
            } else if (route.name === 'Details') {
              return (
                <DetailsIcon focused={focused} color={color} size={size} />
              );
            }
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;
