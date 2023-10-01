import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 12,
  },
  image: {
    width: 370,
    height: 420,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 80,
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    fontWeight: 'bold',
    margin: 'auto',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ModalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: 'red',
    marginRight: 12,
  },
  noButton: {
    backgroundColor: 'green',
    marginLeft: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  updateStyle: {
    backgroundColor: 'green',
    margin: 20,
  },
  deleteStyle: {
    backgroundColor: 'red',
    margin: 20,
  },
});

export default styles;
