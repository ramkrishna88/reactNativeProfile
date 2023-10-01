import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';

const DeleteConfirmationModal = ({isVisible, onYesPress, onNoPress}) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.headerText}>
            Are you sure you want to delete?
          </Text>
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={[styles.ModalButton, styles.yesButton]}
              onPress={onYesPress}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ModalButton, styles.noButton]}
              onPress={onNoPress}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteConfirmationModal;
