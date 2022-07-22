import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {green, white} from '../constants/colors';
import {ImgBgLogin, ImgState} from '../constants/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextFieldNumber from '../components/TextFieldNumber';

export default function SignInWithNumber({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: white}}>
      <View style={{position: 'absolute', top: -150, left: 0, right: 0}}>
        <Image
          source={ImgBgLogin}
          style={{height: 374, resizeMode: 'cover', width: '100%'}}
          blurRadius={60}
        />
      </View>
      <View style={{paddingHorizontal: 24}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={30} />
        </TouchableOpacity>
        <View style={{height: 65}} />
        <Text style={{fontSize: 20, fontWeight: '600'}}>
          Enter your mobile number
        </Text>
        <View style={{height: 27}} />
        <TextFieldNumber />
      </View>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate('SignInVerification')}>
        <Icon name="chevron-right" size={30} color={white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    position: 'absolute',
    right: 25,
    bottom: 35,
    backgroundColor: green,
    width: 67,
    height: 67,
    borderRadius: 67,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
