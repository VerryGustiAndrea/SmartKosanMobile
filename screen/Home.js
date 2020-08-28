import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
const firebaseConfig = require('../config/firebaseConfig');
import firebase from 'firebase';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      suhu: 1,
    };
  }

  getDataSuhuKelembapan = async () => {
    // let database = firebase.database();
    // let ref = database.ref('SensorSuhu/Realtime');
    await firebase
      .database()
      .ref('SensorSuhu/Realtime')
      .on('value', (snapshot) => {
        this.setState({
          data: snapshot.val(),
        });
      });
  };

  // getCovidLampung = async () => {
  //   await axios.get(COVID_LAMPUNG).then(res => {
  //     let dataCountry = res.data[0];
  //     //   console.warn(dataCountry);
  //     this.setState({dataCountry});
  //   });
  //   // console.warn(this.state.dataCountry);
  // };

  componentDidMount() {
    ///////
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.getDataSuhuKelembapan();
  }

  render() {
    return (
      //  this.state.currentPosition.latitude ?
      <>
        {/* {this.disableTracking()} */}
        {/* <StatusBar translucent backgroundColor="transparent" /> */}
        <StatusBar backgroundColor="#000" />

        <View>
          <Text>Naon={this.state.suhu}</Text>
          <Text>Naon={this.state.data.kelembapan}</Text>
        </View>
      </>
    );
  }
}

export default Home;
