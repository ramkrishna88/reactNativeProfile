import React, {useState} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Alice Johnson',
      description: 'Web Developer',
      image: 'https://picsum.photos/200/300',
      email: 'alice@example.com',
      phoneNumber: '123-456-7890',
      dateOfBirth: '1990-05-15',
      address: '123 Main St, Cityville, USA',
      country: 'United States',
    },
    {
      id: '2',
      name: 'John Smith',
      description: 'Software Engineer',
      image: 'https://picsum.photos/200/301',
      email: 'john@example.com',
      phoneNumber: '987-654-3210',
      dateOfBirth: '1985-10-20',
      address: '456 Elm St, Townsville, USA',
      country: 'United States',
    },
    {
      id: '3',
      name: 'Emma Davis',
      description: 'UI/UX Designer',
      image: 'https://picsum.photos/200/302',
      email: 'emma@example.com',
      phoneNumber: '555-123-4567',
      dateOfBirth: '1992-03-08',
      address: '789 Oak St, Villageland, USA',
      country: 'United States',
    },
    {
      id: '4',
      name: 'Michael Wilson',
      description: 'Data Analyst',
      image: 'https://picsum.photos/200/303',
      email: 'michael@example.com',
      phoneNumber: '111-222-3333',
      dateOfBirth: '1980-12-01',
      address: '321 Pine St, Hamletown, USA',
      country: 'United States',
    },
    {
      id: '5',
      name: 'Sophia Brown',
      description: 'Product Manager',
      image: 'https://picsum.photos/200/304',
      email: 'sophia@example.com',
      phoneNumber: '444-555-6666',
      dateOfBirth: '1987-07-25',
      address: '654 Cedar St, Meadowville, USA',
      country: 'United States',
    },
  ]);

  const handleUpdateData = updatedData => {
    setData(updatedData);
  };

  const handleAddData = newData => {
    setData([...data, newData]);
  };

  const handleDeleteData = idToDelete => {
    setData(prevData => prevData.filter(item => item.id !== idToDelete));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekend Project Week1</Text>
      <Button
        title="Add Your Profile"
        style={styles.textStyle}
        onPress={() =>
          navigation.navigate('AddData', {
            dataForUpdate: {},
            data: data,
            updateData: handleUpdateData,
            onSave: handleAddData,
          })
        }
      />

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
              navigation.navigate('Details', {
                data: item,
                updateData: handleUpdateData,
                onDelete: () => handleDeleteData(item.id),
              })
            }>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
