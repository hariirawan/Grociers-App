import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {border, green, grey, white} from '../constants/colors';
import {ImgPngFuel4} from '../constants/images';
import ProductCard from './ProductCard';

export default function ListProduct({title, navigation}: any) {
  return (
    <>
      <View
        style={[
          styles.flexRowCenter,
          {justifyContent: 'space-between', paddingHorizontal: 24},
        ]}>
        <Text style={{fontSize: 24, fontWeight: '600'}}>{title}</Text>
        <Text style={{fontSize: 16, fontWeight: '600', color: green}}>
          See all
        </Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Array.from(Array(9)).map((val, index) => {
          return (
            <ProductCard
              key={index}
              onPress={() => navigation.navigate('ProductDetail')}
              index={index}
              style={
                index === 0
                  ? {marginLeft: 24, marginRight: 15}
                  : {
                      marginRight: 15,
                    }
              }
            />
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  cardStyle: {
    width: 175,
    height: 248,
    borderWidth: 1,
    borderColor: border,
    marginRight: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: white,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
