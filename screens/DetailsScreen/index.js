import React, {useState} from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';
import styles from './styles';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const DetailsScreen = ({route, navigation}) => {
  const {data, onDelete} = route.params;
  const [imageError, setImageError] = useState(false);
  const [updatedData, setUpdatedData] = useState(data);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleSave = () => {
    setUpdatedData(updatedData);
    route.params.updateData(updatedData);
    navigation.navigate('Home');
  };

  const handleUpdate = () => {
    navigation.navigate('AddData', {
      dataForUpdate: updatedData,
      onSave: handleSave,
      updateData: route.params.updateData,
      onDelete: route.params.onDelete,
    });
  };

  const handleDelete = () => {
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    onDelete(updatedData.id);
    navigation.navigate('Home');
  };

  const cancelDelete = () => {
    setDeleteModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!imageError ? (
        <Image
          source={{uri: updatedData.image}}
          style={styles.image}
          onError={handleImageError}
        />
      ) : (
        <Text>No Image Available</Text>
      )}

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Name: {updatedData.name}</Text>
          <Text style={styles.detailsText}>
            Job Description: {updatedData.description}
          </Text>
          <Text style={styles.detailsText}>Email: {updatedData.email}</Text>
          <Text style={styles.detailsText}>
            Phone Number: {updatedData.phoneNumber}
          </Text>
          <Text style={styles.detailsText}>
            Date of Birth: {updatedData.dateOfBirth}
          </Text>
          <Text style={styles.detailsText}>Address: {updatedData.address}</Text>
          <Text style={styles.detailsText}>Country: {updatedData.country}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Update" onPress={handleUpdate} style={styles.button} />
        <Button
          title="Delete"
          onPress={handleDelete}
          color="red"
          style={styles.button}
        />
      </View>

      <DeleteConfirmationModal
        isVisible={isDeleteModalVisible}
        onYesPress={confirmDelete}
        onNoPress={cancelDelete}
      />
    </ScrollView>
  );
};

export default DetailsScreen;
