import React from "react";
import { View, Image } from "react-native";
// import * as Updates from "expo-updates";

const Logo = () => {
  return (
    <View>
      <Image source={{uri: 'https://i.ibb.co/QNMv94f/LSM-LOGO.png'}} style={{height: 150, width: 150}} />
    </View>
  );
};


export default Logo;