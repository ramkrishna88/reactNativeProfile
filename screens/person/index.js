import React, {useState, useEffect} from 'react';
import {View, Button, Image, Text} from 'react-native';
import {UserDetailsProvider} from '../../context/UserDetailsContext';
import UserDetailsCard from '../../components/ UserDetailsCard';

const PersonScreen = ({navigation}) => {
  return (
    <View>
      <UserDetailsProvider>
        <UserDetailsCard />
        <Text>This is the Person Screen</Text>
      </UserDetailsProvider>
    </View>
  );
};

export default PersonScreen;
