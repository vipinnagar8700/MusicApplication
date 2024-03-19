import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { Black, White,Grey } from "../Helper/Color";
import { AntDesign } from '@expo/vector-icons';

const CreateAccount = () => {

  const handleGoBack = () => {
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
       <AntDesign name="arrowleft" size={24} color={White} />
       </TouchableOpacity>
        <Text style={styles.headerText}>Create Account</Text>
        <Text style={styles.headerText}></Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.MainHead}>
            Whats your email?
        </Text>
        <TextInput style={{backgroundColor:Grey,width:'100%',padding:10,borderRadius:6,marginTop:10}}/>
        <Text style={styles.MainHeads}>
            You'll need to confirm this email later.
        </Text>
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{backgroundColor:Grey,paddingHorizontal:30,borderRadius:20,borderWidth:1,borderColor:Grey,paddingVertical:10,fontFamily:'appfont-medium'}}>Next</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default CreateAccount;
