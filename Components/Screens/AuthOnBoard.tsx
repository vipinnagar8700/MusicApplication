import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Black, Green, White } from '../Helper/Color';


const AuthOnBoard = () => {
  return (
    <View style={styles.container}>
     <Image source={require('../../assets/Spotify.jpg')} style={styles.Image}/>
     <Text style={styles.Heading}>
        Millions of songs.Free on Spotify.
     </Text>
     <View style={{width:'100%',alignItems:'center',paddingHorizontal:20}}>
        <View style={{borderColor:Green,borderWidth:1,width:'100%',padding:10,borderRadius:30,alignItems:'center'}}><Text style={{color:White,fontSize:20,fontFamily:'appfont-light'}}>Sign up free</Text></View>
     </View>
     <View style={{width:'100%',alignItems:'center',paddingHorizontal:20,marginTop:20}}>
        <View style={{borderColor:Green,borderWidth:1,width:'100%',padding:10,borderRadius:30,alignItems:'center'}}><Text style={{color:White,fontSize:20,fontFamily:'appfont-light'}}>Continue with Google</Text></View>
     </View>
     <View style={{width:'100%',alignItems:'center',paddingHorizontal:20,marginTop:20}}>
        <View style={{borderColor:Green,borderWidth:1,width:'100%',padding:10,borderRadius:30,alignItems:'center'}}><Text style={{color:White,fontSize:20,fontFamily:'appfont-light'}}>Continue with Facebook</Text></View>
     </View>
  <Text style={{color:White,fontSize:20,marginTop:20,fontFamily:'appfont-light'}}>Login in</Text>
    </View>
  );
};

export default AuthOnBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
backgroundColor:Black,
  },Image:{
    width:180,height:180
  },Heading:{
    marginVertical:40,
    color:White,
    fontSize:32,paddingHorizontal:20,fontFamily:'appfont-medium'
  }
}
);
