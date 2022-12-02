import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListProduct from '../components/ListProduct';
import SearchBox from '../components/SearchBox';
import Swipper from '../components/Swipper';
import {grey_light, white} from '../constants/colors';
import {ImgLogin} from '../constants/images';

export default function HomeScreen(props) {
  return (
    <SafeAreaView style={{backgroundColor: white, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={ImgLogin}
            style={{height: 30, resizeMode: 'contain', alignSelf: 'center'}}
          />
          <View style={[styles.flexRowCenter, styles.locationStyle]}>
            <Icon name="location-on" size={20} style={{marginRight: 5}} />
            <Text>Dhaka, Banassre</Text>
          </View>
        </View>
        <SearchBox />

        <Swipper />

        <ListProduct title={'Exclusive Offer'} {...props} />
        <ListProduct title={'Best Selling'} {...props} />
        <View style={{height: 20}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationStyle: {
    marginTop: 10,
    justifyContent: 'center',
  },
});
