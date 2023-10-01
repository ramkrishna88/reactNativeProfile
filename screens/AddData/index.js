import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './Styles';

const AddData = ({route, navigation}) => {
  const {dataForUpdate = {}} = route.params;
  const [errorMessages, setErrorMessages] = useState({});
  const [name, setName] = useState(dataForUpdate.name || '');
  const [description, setDescription] = useState(
    dataForUpdate.description || '',
  );
  const [image, setImage] = useState(dataForUpdate.image || '');
  const [email, setEmail] = useState(dataForUpdate.email || '');
  const [phoneNumber, setPhoneNumber] = useState(
    dataForUpdate.phoneNumber || '',
  );
  const [dateOfBirth, setDateOfBirth] = useState(
    dataForUpdate.dateOfBirth || '',
  );
  const [address, setAddress] = useState(dataForUpdate.address || '');
  const [country, setCountry] = useState(dataForUpdate.country || '');

  useEffect(() => {
    setName(dataForUpdate.name || '');
    setDescription(dataForUpdate.description || '');
    setImage(dataForUpdate.image || '');
    setEmail(dataForUpdate.email || '');
    setPhoneNumber(dataForUpdate.phoneNumber || '');
    setDateOfBirth(dataForUpdate.dateOfBirth || '');
    setAddress(dataForUpdate.address || '');
    setCountry(dataForUpdate.country || '');
  }, [dataForUpdate]);

  const handleSave = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Please fill in the name';
    }
    if (!description) {
      errors.description = 'Please fill in the description';
    }
    if (!image) {
      errors.image = 'Please fill in the image URL';
    }
    if (!email) {
      errors.email = 'Please fill in the email';
    }
    if (!phoneNumber) {
      errors.phoneNumber = 'Please fill in the phone number';
    }
    if (!dateOfBirth) {
      errors.dateOfBirth = 'Please fill in the date of birth';
    }
    if (!address) {
      errors.address = 'Please fill in the address';
    }
    if (!country) {
      errors.country = 'Please fill in the country';
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    const newData = {
      id: dataForUpdate.id || Math.random().toString(),
      name,
      description,
      image,
      email,
      phoneNumber,
      dateOfBirth,
      address,
      country,
    };

    if (dataForUpdate.id) {
      // Update the data using the updateData function passed from HomeScreen
      route.params.updateData(updatedData => {
        return updatedData.map(item =>
          item.id === dataForUpdate.id ? {...item, ...newData} : item,
        );
      });
    } else {
      route.params.onSave(newData);
    }
    navigation.navigate('Home');
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Data</Text>
      {errorMessages.name && (
        <Text style={styles.errorMessage}>{errorMessages.name}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      {errorMessages.description && (
        <Text style={styles.errorMessage}>{errorMessages.description}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline={true}
      />
      {errorMessages.image && (
        <Text style={styles.errorMessage}>{errorMessages.image}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Image"
        value={image}
        onChangeText={text => setImage(text)}
      />
      {errorMessages.email && (
        <Text style={styles.errorMessage}>{errorMessages.email}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {errorMessages.phoneNumber && (
        <Text style={styles.errorMessage}>{errorMessages.phoneNumber}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      {errorMessages.dateOfBirth && (
        <Text style={styles.errorMessage}>{errorMessages.dateOfBirth}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        value={dateOfBirth}
        onChangeText={text => setDateOfBirth(text)}
      />
      {errorMessages.address && (
        <Text style={styles.errorMessage}>{errorMessages.address}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      {errorMessages.country && (
        <Text style={styles.errorMessage}>{errorMessages.country}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={text => setCountry(text)}
      />

      <Button title="Save" onPress={handleSave} />
      <Button title="Cancel" onPress={handleCancel} />
    </View>
  );
};

export default AddData;
