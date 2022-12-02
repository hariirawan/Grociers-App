import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import SearchBox from '../components/SearchBox';
import Typograpy from '../components/Typograpy';
import {generateRgba, white} from '../constants/colors';
import {Imgpngfuel, ImgPngFuel4, ImgPngFuel5} from '../constants/images';

export default function ExploreScreen({navigation}) {
  const data = [
    {category: 'Frash Fruits & Vegetable', img: ImgPngFuel4},
    {category: 'Cooking Oil & Ghee', img: ImgPngFuel5},
    {category: 'Meat & Fish', img: Imgpngfuel},
    {category: 'Bakery & Snacks', img: Imgpngfuel},
    {category: 'Frash Fruits & Vegetable', img: Imgpngfuel},
    {category: 'Frash Fruits & Vegetable', img: Imgpngfuel},
    {category: 'Frash Fruits & Vegetable', img: Imgpngfuel},
    {category: 'Frash Fruits & Vegetable', img: Imgpngfuel},
    {category: 'Frash Fruits & Vegetable', img: Imgpngfuel},
    {category: 'Frash Fruits & Vegetable', img: Imgpngfuel},
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: white}}>
      <Typograpy text={'Find Products'} style={{textAlign: 'center'}} />
      <SearchBox />
      <FlatList
        keyExtractor={(item, index) => `${index}`}
        numColumns={2}
        contentContainerStyle={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ExploreDetail')}
              style={{
                flex: 1,
                height: 189.11,
                marginHorizontal: 5,
                marginBottom: 10,
                ...generateRgba(),
                borderWidth: 1,
                borderRadius: 18,
                paddingHorizontal: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={item.img}
                style={{width: 93, height: 93, resizeMode: 'contain'}}
              />
              <Text style={{textAlign: 'center'}}>{item.category}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
