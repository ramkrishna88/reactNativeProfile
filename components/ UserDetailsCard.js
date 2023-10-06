import React from 'react';
import {View, Text, Button} from 'react-native';
import {useUserDetails} from '../context/UserDetailsContext';

const UserDetailsCard = () => {
  const {
    userDetails,
    updateUserDetails,
    nextUser,
    prevUser,
    currentIndex,
    addNewUsers,
  } = useUserDetails();

  const handleUpdateClick = () => {
    const newDetails = {
      name: `New Name ${currentIndex}`,
      email: `newemail${currentIndex}@example.com`,
    };
    updateUserDetails(newDetails);
  };

  const handleAddUserClick = () => {
    const newUserToAdd = {
      name: `New User ${currentIndex}`,
      email: `newuser${currentIndex}@example.com`,
    };
    addNewUsers([newUserToAdd]);
  };

  return (
    <View>
      <Text>Name: {userDetails.name}</Text>
      <Text>
        Email: {userDetails.email} (Index: {currentIndex})
      </Text>
      <Button title="Update" onPress={handleUpdateClick} />
      <Button title="Add User" onPress={handleAddUserClick} />
      <Button title="Next User" onPress={nextUser} />
      <Button title="Previous User" onPress={prevUser} />
    </View>
  );
};

export default UserDetailsCard;
