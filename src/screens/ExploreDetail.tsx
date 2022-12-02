import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SearchBox from '../components/SearchBox';
import {white} from '../constants/colors';
import ProductCard from '../components/ProductCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ExploreDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: white}}>
      <View
        style={{
          position: 'absolute',
          left: 10,
          right: 15,
          top: 30,
          zIndex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: white,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={25} />
        </TouchableOpacity>
        <SearchBox style={{flex: 1}} />
        <TouchableOpacity onPress={() => navigation.navigate('FilterData')}>
          <MaterialIcons name="filter-list" size={25} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        numColumns={2}
        contentContainerStyle={{
          alignSelf: 'center',
          marginTop: 70,
          marginBottom: 80,
        }}
        renderItem={({item}) => {
          return (
            <ProductCard
              key={item}
              onPress={() => navigation.navigate('ProductDetail')}
              index={item}
              style={{marginHorizontal: 5, marginVertical: 5}}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}
