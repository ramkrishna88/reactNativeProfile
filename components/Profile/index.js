import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const ProfileF = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const textInputStyle = {
    backgroundColor: 'green',
    height: 40,
    margin: 16,
    padding: 16,
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        value={firstName}
        defaultValue="First Name"
        onChangeText={changedText => {
          setFirstName(changedText);
        }}
        style={textInputStyle}
      />

      <TextInput
        value={lastName}
        defaultValue="Last Name"
        onChangeText={changedText => {
          setLastName(changedText);
        }}
        style={textInputStyle}
      />

      <TextInput
        value={email}
        defaultValue="Email"
        onChangeText={changedText => {
          setEmail(changedText);
        }}
        style={textInputStyle}
      />

      <TextInput
        value={phone}
        defaultValue="Phone"
        onChangeText={changedText => {
          setPhone(changedText);
        }}
        style={textInputStyle}
      />

      <TextInput
        value={password}
        defaultValue="Password"
        onChangeText={changedText => {
          setPassword(changedText);
        }}
        style={textInputStyle}
      />

      <TextInput
        value={confirmPassword}
        defaultValue="Confirm Password"
        onChangeText={changedText => {
          setConfirmPassword(changedText);
        }}
        style={textInputStyle}
      />

      <Button
        onPress={() => {
          props.onSubmitPressed({
            firstName,
            lastName,
            email,
            phone,
            password,
            confirmPassword,
          });

          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setPassword('');
          setConfirmPassword('');
        }}
        title="Submit"
        color="#841584"
        padding="16"
      />

      <Button
        onPress={() => {
          props.onDeletePressed();
        }}
        title="Delete"
        color="#841584"
        padding="16"
      />
    </View>
  );
};

export default ProfileF;
