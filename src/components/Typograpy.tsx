import {View, Text, TextStyle} from 'react-native';
import React from 'react';

interface ITypo {
  text: String;
  style?: TextStyle;
}

export default function Typograpy(props: ITypo) {
  return <Text style={{fontSize: 20, ...props.style}}>{props.text}</Text>;
}
