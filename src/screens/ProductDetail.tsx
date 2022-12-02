import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {border, green, grey, grey_light} from '../constants/colors';
import Accordion from '../components/Accordion';
import Button from '../components/Button';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

export default function ProductDetail({navigation}) {
  const images = [
    'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/06/02/18/24/watermelon-2367029_960_720.jpg',
  ];

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={25} />
        </TouchableOpacity>
        <Feather name="upload" size={20} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingBottom: 30}}>
        <View style={{position: 'relative', width: '100%'}}>
          <ScrollView
            scrollEventThrottle={16}
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
            {images.map((val, index) => (
              <View
                key={index}
                style={{
                  width: SCREEN_WIDTH,
                  height: 371,
                }}>
                <Image
                  source={{uri: val}}
                  style={{
                    height: 371,
                    width: '100%',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={{paddingHorizontal: 24, marginTop: 30}}>
          <View style={styles.flexRowBetween}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              Naturel Red Apple
            </Text>
            <MaterialCommunity name="heart-outline" size={24} color={grey} />
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: grey,
              marginTop: 6,
            }}>
            1kg, Price
          </Text>
          <View style={[styles.flexRowBetween, {marginVertical: 30}]}>
            <View style={styles.row}>
              <Feather name="minus" size={24} color={grey} />
              <Text
                style={{
                  paddingVertical: 13,
                  paddingHorizontal: 18,
                  borderColor: border,
                  borderWidth: 1,
                  borderRadius: 17,
                  marginHorizontal: 20,
                }}>
                1
              </Text>
              <Feather name="plus" size={24} color={green} />
            </View>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>$4.99</Text>
          </View>

          <Accordion title="Product Detail">
            <Text>
              Apples are nutritious. Apples may be good for weight loss. apples
              may be good for your heart. As part of a healtful and varied diet.
            </Text>
          </Accordion>
          <Accordion title="Nutritions" />
          <Accordion title="Review" />
          <Button
            label={'Add To Basket'}
            btnStyle={{backgroundColor: green, borderRadius: 19}}
          />
        </View>
        <View style={{height: 30}} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 40,
    marginHorizontal: 24,
    zIndex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
