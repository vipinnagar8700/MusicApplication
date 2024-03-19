import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { useFonts } from 'expo-font';
import SplashScreen from "./Components/Screens/SplashScreen";
import AuthOnBoard from "./Components/Screens/AuthOnBoard";
import CreateAccount from "./Components/Screens/CreateAccount";
import CreatePassword from "./Components/Screens/CreatePassword";
import CreateGender from "./Components/Screens/CreateGender";
import SelectArtists from "./Components/Screens/SelectArtists";
import StartListening from "./Components/Screens/StartListening";



export default function App({ navigation }) {

  


  const [fontsLoaded] = useFonts({
    'appfont-semi': require('./assets/fonts/Outfit-Black.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-extraBold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'appfont-extraLight': require('./assets/fonts/Outfit-ExtraLight.ttf'),
    'appfont-light': require('./assets/fonts/Outfit-Light.ttf'),
    'appfont-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-semiBold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'appfont-thin': require('./assets/fonts/Outfit-Thin.ttf'),
  });
  
  if (!fontsLoaded) {
    return null
  }

  return (
    // <SplashScreen/>
    // <AuthOnBoard/>
    // <CreateAccount />
    // <CreatePassword/>
    // <CreateGender/>
    // <SelectArtists/>
    <StartListening/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
