import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    date: '2017-09-16T16:00:00Z',
  },
  {
    id: '2',
    title: 'Second Item',
    date: '2017-09-16T16:00:00Z',
  },
  {
    id: '3',
    title: 'Third Item',
    date: '2017-09-16T16:00:00Z',
  },
  {
    id: '4',
    title: 'Fourth Item',
    date: '2017-09-16T16:00:00Z',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const FlatListView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListView;
