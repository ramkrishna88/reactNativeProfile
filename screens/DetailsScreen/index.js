import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const DetailsScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <Text>Details Screen</Text>
      <Animatable.View
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        style={{
          width: 200,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="heart" size={100} color="white" />
        <Text>Heart Icon</Text>
      </Animatable.View>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default DetailsScreen;
