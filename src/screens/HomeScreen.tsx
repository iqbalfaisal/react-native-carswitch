import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ItemCard, SearchBar} from '../components';

import Api from '../services/Api';
import {IItem} from '../types';

export default function HomeScreen() {
  const [text, setText] = useState('');
  const [item, setItem] = useState<IItem>({name: '', age: 0, count: 0});

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const fetchItems = () => {
    Api.get(`https://api.agify.io/?name=${text}`, (res: any) => {
      setItem(res);
    });
  };

  const handleText = (value: string) => {
    setText(value);
  };

  return (
    <View style={styles.container}>
      <SearchBar value={text} onChangeText={handleText} />

      <ItemCard item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
