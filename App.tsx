/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React, {useState} from 'react';
// import {SafeAreaView, ScrollView} from 'react-native';
// import ProfileF from './components/profileF';
// import UserList from './components/userListF';

// App with the input and text with the default value and save and delete button
// const App = () => {
//   const [userList, setUserList] = useState<any[]>([]);

//   const addUserToList = (userData: any) => {
//     // Generating a unique ID for each user (you may use a library like 'uuid' for this)
//     userData.id = Date.now().toString();
//     setUserList((prevUserList: any[]) => [...prevUserList, userData]);
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <ScrollView>
//         <ProfileF
//           onSubmitPressed={(userData: any) => {
//             addUserToList(userData);
//           }}
//           onDeletePressed={() => {
//             setUserList([]);
//           }}
//         />

//         {userList && userList.length > 0 && <UserList userData={userList} />}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// ActivityIndicator code for the loading screen
import React from 'react';
import ActivityIndicatorF from './components/ActivityIndicatoryF';

const App = () => {
  return <ActivityIndicatorF />;
};

export default App;
