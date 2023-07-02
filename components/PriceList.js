import React, { Component } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";
import firebase from 'firebase';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Data from '../resources/PTM-PL.json';
import { SearchBar, ListItem } from "react-native-elements";
// import * as Updates from "expo-updates";

class PriceLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({
      data: Data,
    });

    this.arrayholder = Data;
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.KODE} ${item.NAMA_BARANG.toUpperCase()} ${item.MERK.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        
        <TouchableOpacity style={{marginTop: 30, marginLeft: 20}} onPress={() => firebase.auth().signOut()}>
          <Text style={{color: 'gray'}}> LOGOUT </Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 10, marginLeft: 20, marginBottom: 10}} >Last Update: 01 July 2023</Text>

        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem.Content style={{marginLeft: 20}} >
              <ListItem.Title>{item.KODE}</ListItem.Title>
              <ListItem.Subtitle>{item.NAMA_BARANG}</ListItem.Subtitle>
              <ListItem.Subtitle>Merk: {item.MERK} / ( {item.RAK} )</ListItem.Subtitle>
              <ListItem.Subtitle>Rp. {item.HARGA} / {item.SAT}</ListItem.Subtitle>
            </ListItem.Content>
            
          )}
          keyExtractor={item => item.KODE}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }
}

export default PriceLists;