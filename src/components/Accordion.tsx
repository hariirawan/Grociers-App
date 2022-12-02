import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {border} from '../constants/colors';

export default function Accordion(props) {
  return (
    <View
      style={{
        paddingVertical: 16,
        borderTopColor: border,
        borderTopWidth: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>{props.title}</Text>
        <MaterialIcon
          name={props.children ? 'chevron-down' : 'chevron-right'}
          size={24}
        />
      </View>
      {props.children && <View style={{paddingTop: 10}}>{props.children}</View>}
    </View>
  );
}
