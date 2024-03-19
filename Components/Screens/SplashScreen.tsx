import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Black, White } from '../Helper/Color';


const SplashScreen = () => {
  return (
    <View style={styles.container}>
     <Image source={require('../../assets/Spotify.jpg')} style={styles.Image}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
backgroundColor:Black,
  },Image:{
    width:180,height:180
  }
}
);
