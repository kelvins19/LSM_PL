import React from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";
import Logo from './Logo';
import EmailAndPassword from './EmailAndPassword';
// import * as Updates from "expo-updates";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo/>
      </View>

      <View style={styles.emailAndPassword}>
        <EmailAndPassword/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },

  logoContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emailAndPassword:{
    flex: 1,
  }
})

export default LoginForm;