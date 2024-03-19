import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Black, Green, White } from "../Helper/Color";

const StartListening = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Spotify.jpg")}
        style={styles.Image}
      />
      <Text style={styles.Heading}>Great Picks!</Text>
      <Text
        style={{
          color: White,
          fontSize: 18,
          marginVertical: 20,
          fontFamily: "appfont-light",
        }}
      >
        We've made a playlist to get you started.
      </Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          paddingHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <View
          style={{
            borderColor: White,
            borderWidth: 1,
            width: "100%",
            padding: 10,
            borderRadius: 30,
            alignItems: "center",
            backgroundColor: White,
          }}
        >
          <Text
            style={{ color: Black, fontSize: 20, fontFamily: "appfont-light" }}
          >
            Start Listening
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: Green,
          fontSize: 20,
          marginTop: 20,
          fontFamily: "appfont-medium",
        }}
      >
        Not Now
      </Text>
    </View>
  );
};

export default StartListening;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Black,
  },
  Image: {
    width: 180,
    height: 180,
  },
  Heading: {
    color: White,
    fontSize: 22,
    paddingHorizontal: 20,
    fontFamily: "appfont-medium",
  },
});
