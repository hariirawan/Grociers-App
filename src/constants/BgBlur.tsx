import React from 'react';
import {Image} from 'react-native';
import {ImgBgLogin} from './images';

export default function BgBlur() {
  return (
    <Image
      source={ImgBgLogin}
      style={{
        height: 374,
        resizeMode: 'cover',
        width: '100%',
        position: 'absolute',
        top: -20,
        left: 0,
        right: 0,
      }}
      blurRadius={60}
    />
  );
}
