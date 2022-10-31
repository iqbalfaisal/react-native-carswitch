import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IItem} from '../types';

type ItemCardProps = {
  item: IItem;
};

function ItemCard({item}: ItemCardProps) {
  const {name, age, count} = item;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Age: {age}</Text>
      <Text style={styles.text}>Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },

  text: {
    color: 'black',
  },
});

export default React.memo(ItemCard);
