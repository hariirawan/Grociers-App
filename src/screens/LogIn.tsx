import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Button from '../components/Button';
import TextField from '../components/TextField';
import BgBlur from '../constants/BgBlur';
import {green, white} from '../constants/colors';
import {ImgLogin} from '../constants/images';

export default function LogIn({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: white}}>
      <BgBlur />
      <Image
        source={ImgLogin}
        style={{height: 55, resizeMode: 'contain', alignSelf: 'center'}}
      />
      <View style={{paddingHorizontal: 24, marginTop: 100}}>
        <Text style={{fontSize: 26, fontWeight: '600', marginBottom: 15}}>
          Login with Email
        </Text>
        <Text>Enter your emails and password</Text>
        <View style={{height: 40}} />
        <TextField
          label={'Email'}
          containerStyle={{marginBottom: 30}}
          style={{paddingVertical: 10}}
          placeholder={'Masukkan Email'}
        />
        <TextField
          label={'Password'}
          style={{paddingVertical: 10}}
          secureTextEntry={true}
          placeholder={'Masukkan Password'}
        />
        <Text style={{textAlign: 'right', marginTop: 20, marginBottom: 30}}>
          Forgot Password
        </Text>
        <Button label={'Log In'} btnStyle={{backgroundColor: green}} />
        <View
          style={{
            marginTop: 25,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: green, marginLeft: 5}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
