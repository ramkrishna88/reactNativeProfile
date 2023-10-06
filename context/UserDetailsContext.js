import React, {createContext, useState, useContext} from 'react';

const UserDetailsContext = createContext();

export const UserDetailsProvider = ({children}) => {
  const initialUserDetails = [
    {name: 'John Doe', email: 'john@example.com'},
    {name: 'Jane Smith', email: 'jane@example.com'},
    {name: 'John Smith', email: 'jones@example.com'},
    {name: 'Jane Doe', email: 'janeDoe@gmail.com'},
  ];

  const [userDetailsArray, setUserDetailsArray] = useState(initialUserDetails);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newUsers, setNewUsers] = useState([]);
  const [newUserIndex, setNewUserIndex] = useState(0);

  const getCurrentUserDetails = () => {
    const allUsers = [...userDetailsArray, ...newUsers];
    return allUsers[currentIndex];
  };

  const updateUserDetails = newDetails => {
    const updatedUserDetailsArray = [...userDetailsArray];
    updatedUserDetailsArray[currentIndex] = newDetails;
    setUserDetailsArray(updatedUserDetailsArray);
  };

  const addNewUsers = users => {
    const newUsersWithIndex = users.map((user, index) => ({
      ...user,
      name: `New User ${index + userDetailsArray.length + 1}`,
      email: `newuser${index + userDetailsArray.length + 1}@example.com`,
    }));
    setNewUsers([...newUsers, ...newUsersWithIndex]);
  };

  const nextUser = () => {
    const allUsers = [...userDetailsArray, ...newUsers];
    setCurrentIndex(prevIndex =>
      prevIndex === allUsers.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevUser = () => {
    const allUsers = [...userDetailsArray, ...newUsers];
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? allUsers.length - 1 : prevIndex - 1,
    );
  };

  const value = {
    userDetails: getCurrentUserDetails(),
    updateUserDetails,
    addNewUsers,
    nextUser,
    prevUser,
    currentIndex,
    newUsers,
    newUserIndex,
  };

  return (
    <UserDetailsContext.Provider value={value}>
      {children}
    </UserDetailsContext.Provider>
  );
};

export const useUserDetails = () => {
  return useContext(UserDetailsContext);
};
