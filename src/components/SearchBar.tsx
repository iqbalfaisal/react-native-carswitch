import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({value, onChangeText}: SearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        value={value}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Enter text to search"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },

  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
});
