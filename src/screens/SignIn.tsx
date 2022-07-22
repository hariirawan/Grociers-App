import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../components/Button';
import {blue, blue_dark, border, grey, white} from '../constants/colors';
import {ImgBgLogin, ImgState} from '../constants/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFon from 'react-native-vector-icons/Fontisto';
import BgBlur from '../constants/BgBlur';

export default function SignIn({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: white}}>
      <BgBlur />
      <View
        style={{
          paddingHorizontal: 24,
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 100,
        }}>
        <Text style={styles.txtStyle}>Get your grocieres</Text>
        <Text style={styles.txtStyle}>With Nectar</Text>
        <TouchableOpacity
          style={styles.actionStyle}
          onPress={() => navigation.navigate('SignInWithNumber')}>
          <Image
            source={ImgState}
            style={{height: 23, width: 33, marginRight: 12}}
          />

          <Text>+880</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: grey,
            fontSize: 14,
            textAlign: 'center',
            paddingVertical: 37,
          }}>
          Or connect with social media
        </Text>
        <Button
          label={'Continue With Email'}
          btnStyle={{backgroundColor: blue}}
          onPress={() => navigation.navigate('LogIn')}
          icon={
            <Icon
              name="email"
              size={20}
              color={white}
              style={{marginRight: 10}}
            />
          }
        />
        <View style={{height: 20}} />
        <Button
          label={'Continue With Facebook'}
          btnStyle={{backgroundColor: blue_dark}}
          icon={
            <IconFon
              name="facebook"
              size={20}
              color={white}
              style={{marginRight: 10}}
            />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtStyle: {
    fontWeight: '600',
    fontSize: 18,
  },
  actionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: border,
    borderBottomWidth: 1,
    paddingVertical: 12,
    marginTop: 8,
  },
});
