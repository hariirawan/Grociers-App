import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {black, green, grey, grey_light, white} from '../constants/colors';
import Typograpy from '../components/Typograpy';
import Button from '../components/Button';

export default function FilterData({navigation}) {
  const listFilter = [
    {
      name: 'Eggs',
      isActive: true,
    },
    {
      name: 'Noodles & Paste',
      isActive: false,
    },
    {
      name: 'Chips & Crisps',
      isActive: false,
    },
    {
      name: 'Fast Food',
      isActive: false,
    },
  ];

  return (
    <SafeAreaView style={{backgroundColor: white, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={25} />
        </TouchableOpacity>
        <View style={{flex: 1, paddingVertical: 10}}>
          <Typograpy text={'Filtering'} style={{textAlign: 'center'}} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: grey_light,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 24,
          paddingVertical: 30,
        }}>
        <Typograpy text={'Categories'} style={{marginBottom: 20}} />
        {listFilter.map((val, index) => {
          return (
            <View key={index} style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialIcons
                name={val.isActive ? 'check-box' : 'check-box-outline-blank'}
                color={val.isActive ? green : grey}
                size={20}
                style={{marginRight: 8}}
              />
              <Text style={{color: val.isActive ? green : black}}>
                {val.name}
              </Text>
            </View>
          );
        })}
        <Typograpy text={'Brand'} style={{marginBottom: 20, marginTop: 30}} />
        {listFilter.map((val, index) => {
          return (
            <View key={index} style={{flexDirection: 'row', marginBottom: 10}}>
              <MaterialIcons
                name={val.isActive ? 'check-box' : 'check-box-outline-blank'}
                color={val.isActive ? green : grey}
                size={20}
                style={{marginRight: 8}}
              />
              <Text style={{color: val.isActive ? green : black}}>
                {val.name}
              </Text>
            </View>
          );
        })}
        <Button
          label={'Apply Filter'}
          btnStyle={{
            backgroundColor: green,
            position: 'absolute',
            bottom: 0,
            left: 24,
            right: 24,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}
