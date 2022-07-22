import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import {green, grey, white} from '../constants/colors';
import {ImgLogo, ImgOnboarding, ImgSS} from '../constants/images';

export default function OnBoardingScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={ImgOnboarding}
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Image
          source={ImgSS}
          style={{height: 56, resizeMode: 'contain', marginBottom: 35}}
        />
        <Text style={styles.txtStyle}>Welcome</Text>
        <Text style={styles.txtStyle}>To Our Store</Text>
        <Text
          style={{color: grey, fontSize: 16, marginTop: 19, marginBottom: 40}}>
          Ger your groceries in as fast as one hour
        </Text>

        <Button
          onPress={() => navigation.navigate('SignIn')}
          label={'Get Started'}
          btnStyle={{backgroundColor: green, width: '80%', marginBottom: 40}}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  txtStyle: {fontSize: 28, fontWeight: '600', color: white},
});
