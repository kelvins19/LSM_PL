import React, { Component } from "react";
import { Animated, Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import LoginForm from './components/LoginForm';
import PriceList from './components/PriceList';
import Loading from './components/Loading';
import firebase from 'firebase';
import BG  from './resources/bg.jpg';
// import * as Updates from "expo-updates";

class App extends Component {
  state={
    loggedIn:null
  }

  componentDidMount(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDrJlm9p-2jysJHvzGdR7WASDt1atsj6Is",
      authDomain: "lsm-pl.firebaseapp.com",
      databaseURL: "https://lsm-pl.firebaseio.com",
      projectId: "lsm-pl",
      storageBucket: "lsm-pl.appspot.com",
      messagingSenderId: "576938702128",
      appId: "1:576938702128:web:d25ee82323e7cc1ef284f5",
      measurementId: "G-CL5C5972GG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setState({
          loggedIn: true
        })
        
      } else{
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={BG}>
          <LoginForm/>
        </ImageBackground>
        

      case true:
        return <PriceList/>

        default: 
          return <Loading/>
    }
  }

  render(){
    return(
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',

  }
})

export default App;