import React from 'react';
import {View, Text} from 'react-native';
import {useUserDetails} from '../context/UserDetailsContext';

const UserDetailsCard = () => {
  const {userDetails} = useUserDetails();

  return (
    <View>
      <Text>User Details</Text>
      <Text>Name: {userDetails.name}</Text>
      <Text>Email: {userDetails.email}</Text>
    </View>
  );
};

export default UserDetailsCard;
