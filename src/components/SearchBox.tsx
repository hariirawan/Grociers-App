import {View, Text, TextInput, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {grey_light} from '../constants/colors';

interface ISearchBox {
  style?: ViewStyle;
}

export default function SearchBox({style}: ISearchBox) {
  return (
    <View style={[styles.flexRowCenter, styles.searchStyle, style]}>
      <Icon name="search" size={20} style={{marginRight: 10}} />
      <TextInput placeholder="Search store" style={{paddingVertical: 10}} />
    </View>
  );
}

const styles = StyleSheet.create({
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchStyle: {
    backgroundColor: grey_light,
    marginHorizontal: 24,
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});
