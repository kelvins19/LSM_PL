import React, { Component } from "react";
import { Animated, Button, StyleSheet, Text, View, TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from 'firebase';
// import * as Updates from "expo-updates";

class EmailAndPassword extends Component{
  state={
    email: '',
    password: '',
    error: '',
    loading: false
  }
  
  onBottomPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(this.onLoginSuccess)
    .catch(err => {
      this.setState({
        error:err.message
      })
    })
  }

  onLoginSuccess = () => {
    this.setState({
      error: '',
      loading: false,
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="Email" 
          style={styles.input} 
          value={this.state.Email}
          onChangeText={email=> this.setState({email})}
          />

        <TextInput 
          placeholder="Password" 
          secureTextEntry
          style={styles.input} 
          value={this.state.Password}
          onChangeText={password=> this.setState({password})}
          />

        <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress}>
          <Text style={styles.buttonText}>
            LOGIN
          </Text>
        </TouchableOpacity>

        <Text style={styles.errorText}>
            {this.state.error}
          </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  input: {
    height: 40,
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 15,
    backgroundColor: 'white',
  },

  errorText:{
    fontSize: 25,
    color: 'red',
    alignSelf: 'center',
    marginTop: 10
  },

  buttonText:{
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },

  buttonContainer:{
    backgroundColor: 'maroon',
    padding: 15,
    borderRadius: 8
  }
})

export default EmailAndPassword;