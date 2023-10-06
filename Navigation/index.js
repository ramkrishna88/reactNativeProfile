import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {UserDetailsProvider} from '../context/UserDetailsContext';
import UserDetailsCard from '../components/ UserDetailsCard';
import {
  HomeScreen,
  DetailsScreen,
  PersonScreen,
  SearchScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

const HomeIcon = ({focused, color, size}) => (
  <Ionicons
    name={focused ? 'amplifier' : 'amplifier-off'}
    size={size}
    color={color}
  />
);

const DetailsIcon = ({focused, color, size}) => (
  <Ionicons
    name={focused ? 'alphabetical-variant' : 'alphabetical-variant-off'}
    size={size}
    color={color}
  />
);

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <UserDetailsProvider>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              left: 20,
              right: 20,
              bottom: 20,
              borderRadius: 15,
              elevation: 0,
              backgroundColor: 'green',
              height: 60,
              alignContent: 'center',
            },
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Home') {
                return <HomeIcon focused={focused} color={color} size={size} />;
              } else if (route.name === 'Details') {
                return (
                  <DetailsIcon focused={focused} color={color} size={size} />
                );
              } else if (route.name === 'Person') {
                return (
                  <DetailsIcon focused={focused} color={color} size={size} />
                );
              } else if (route.name === 'Search') {
                return (
                  <DetailsIcon focused={focused} color={color} size={size} />
                );
              }
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Details" component={DetailsScreen} />
          <Tab.Screen name="Person" component={PersonScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
        {/* Display user details card on top of all screens */}
        <UserDetailsCard />
      </UserDetailsProvider>
    </NavigationContainer>
  );
};

export default NavigationComponent;
