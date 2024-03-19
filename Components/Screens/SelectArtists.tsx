import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import { Black, White,Grey } from "../Helper/Color";
import { AntDesign } from '@expo/vector-icons';

const SelectArtists = () => {

  const handleGoBack = () => {
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.content}>
        <Text style={styles.MainHead}>
            Choose 3 or more artists your like.
        </Text>
        <TextInput style={{backgroundColor:White,width:'100%',padding:10,borderRadius:6,marginTop:10}} placeholder="Search" placeholderTextColor={Black}/>
       
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

      <View style={{ flexDirection: 'row',  alignItems: 'center', flexWrap: 'wrap',gap:10,paddingHorizontal:10,justifyContent:'center' }}>
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
  <Image source={require('../../assets/Spotify.jpg')} style={styles.image} />
</View>
</ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        width: '31%', // Adjust as needed
    aspectRatio: 1, // This maintains aspect ratio for the image
      },
    MainHead:{
color:White,marginTop:40,fontSize:30,fontFamily:'appfont-medium'
    },
    MainHeads:{
        color:White,marginTop:5,fontSize:13,fontFamily:'appfont-light'
            },
  container: {
    flex: 1,
    backgroundColor:Black
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor:Black,marginTop:20
  },
  backText: {
    color: White,
    fontSize: 28,
  },
  headerText: {
    fontSize: 18,
    color: White,
    fontFamily:'appfont-medium',
  },
  content: {
    margin:10
  },
});

export default SelectArtists;
