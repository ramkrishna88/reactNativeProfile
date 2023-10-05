import React, {useState, useEffect} from 'react';
import {View, Button, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [imageUri, setImageUri] = useState('https://picsum.photos/200/300');

  useEffect(() => {
    // Fetch a new image URL when the Home screen is mounted
    fetch('https://picsum.photos/200/300')
      .then(response => {
        const newImageUri = response.url;
        setImageUri(newImageUri);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}>
      <Image source={{uri: imageUri}} style={{width: 300, height: 500}} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
