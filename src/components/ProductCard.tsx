import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {border, green, grey, white} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ImgPngFuel4} from '../constants/images';

interface IProductCard {
  onPress?: () => void;
  index: Number;
  image?: String;
  title?: String;
  price?: String;
  style?: ViewStyle;
}

export default function ProductCard(props: IProductCard) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.cardStyle, props.style]}>
      <Image
        source={props?.image ?? ImgPngFuel4}
        style={{width: '100%', resizeMode: 'contain', height: 74}}
      />
      <View style={{height: 31}} />
      <View>
        <Text>{props?.title ?? 'Organic Bananas'}</Text>
        <Text style={{color: grey}}>1kg, Priceg</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>{props?.price ?? '$4.99'}</Text>
        <View
          style={{
            backgroundColor: green,
            padding: 14,
            borderRadius: 20,
          }}>
          <Icon name="add" size={25} color={white} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    width: 175,
    height: 248,
    borderWidth: 1,
    borderColor: border,
    padding: 15,
    borderRadius: 10,
    backgroundColor: white,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
