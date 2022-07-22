import React, {useLayoutEffect} from 'react';
import {Image, View} from 'react-native';
import {green} from '../constants/colors';
import {ImgLogo} from '../constants/images';

export default function SplashScreen({navigation}) {
  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: green,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={ImgLogo} style={{height: 68, resizeMode: 'contain'}} />
    </View>
  );
}
