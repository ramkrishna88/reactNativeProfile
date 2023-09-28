import React from 'react';
import {View, Text, FlatList} from 'react-native';

const UserList = props => {
  return (
    <View>
      <FlatList
        data={props.userData}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'red', margin: 16}}>
            <Text>{item.firstName}</Text>
            <Text>{item.lastName}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UserList;
