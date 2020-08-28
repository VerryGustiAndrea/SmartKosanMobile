import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
const firebaseConfig = require('../config/firebaseConfig');
import firebase from 'firebase';

const DashboardUser = (props) => {
  const [dataDHT, setDataDHT] = useState({});

  // const getNameUser = async () => {
  //   await AsyncStorage.getItem('name', (error, result) => {
  //     if (result) {
  //       setName(result);
  //       setFirstName(result.substring(0, result.indexOf(' ')));
  //     }
  //   });
  // };

  // const getRoleUser = async () => {
  //   await AsyncStorage.getItem('role', (error, result) => {
  //     if (result == 1) {
  //       setRole('Admin');
  //     } else {
  //       setRole('User');
  //     }
  //   });
  // };

  // const logOut = async () => {
  //   await AsyncStorage.clear();
  //   props.navigation.navigate('Login');
  // };

  // const insertToken = async () => {
  //   let data = {
  //     token: await AsyncStorage.getItem('token'),
  //     fcmToken: await AsyncStorage.getItem('fcmToken'),
  //   };
  //   console.log(await AsyncStorage.getItem('email'));

  //   await axios
  //     .patch(URL_UPDATE_TOKEN + `${await AsyncStorage.getItem('email')}`, data)
  //     .then(res => {
  //       console.log(res.data);
  //     })
  //     .catch(err => console.log(err));
  // };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const onValueChange = firebase
      .database()
      .ref('SensorSuhu/Realtime')
      .on('value', (snapshot) => {
        setDataDHT(snapshot.val());
        // this.setState({
        //   data: snapshot.val(),
        // });
      });
    return () =>
      firebase
        .database()
        .ref(`/SensorSuhu/Realtime`)
        .off('value', onValueChange);
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/* <Modal
        style={{
          height: '100%',
          width: '100%',
          // top: '-21%',
          marginTop: '-110%',
          paddingLeft: '38%',
          borderRadius: 50,
        }}
        transparent={true}
        visible={visible}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'top',
          })
        }
        onTouchOutside={() => {
          setVisible(false);
        }}>
        <View style={{width: 200, height: 210}}>
          <TouchableOpacity
            style={styles.profileDetail}
            onPress={() => {
              setVisible(false);
            }}>
            <Text style={styles.buttonTextProfile}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.profileDetail}
            onPress={() => {
              setVisible(false);
            }}>
            <Text style={styles.buttonTextProfile}>Ganti Password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLogout}
            onPress={() => {
              logOut(), setVisible(false);
            }}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}>
        {/* <Image style={styles.menu} source={require('../images/menu3.png')} /> */}
        <Image
          style={styles.dashboardImage}
          source={require('../images/dashboard.jpg')}
        />
        <TouchableOpacity
          style={styles.buttonProfile}
          onPress={() => setVisible(true)}>
          <Image
            style={styles.profile}
            source={require('../images/profile.jpg')}
          />
        </TouchableOpacity>
        <Text style={styles.helloUser}>Halo Verry,</Text>
        <Text style={styles.helloUser2}>Welcome back !!</Text>

        {/* <TextInput
          style={styles.searchBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder={'Date Updated ' + dataDHT.time}
          placeholderTextColor="#A0A5BD"
          selectionColor="#e0e0e0"
          keyboardType="email-address"

          // onChangeText={e => this.setState({email: e})}
          // value={this.state.email}
        /> */}
        <View
          style={{
            top: '13%',
            backgroundColor: '#009688',
            width: '88%',
            borderRadius: 25,
            height: '4.5%',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Avenir LT Pro',
              fontStyle: 'normal',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 12,
            }}>
            {'Last Update: ' + dataDHT.time}
          </Text>
        </View>
        <Text style={styles.categories}>Smart Kosan</Text>
        <Text style={styles.filter}>Filter</Text>
        <View style={{height: '57%'}}>
          <ScrollView style={styles.courses}>
            <View style={styles.box}>
              <View style={styles.item}>
                <Text style={styles.textCourse}>Temperature</Text>
                <Text style={styles.textValue}>{dataDHT.suhu}°C</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.textCourse}>Humidity</Text>
                <Text style={styles.textValue}>{dataDHT.kelembapan}%</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.textCourse}>Index Temp</Text>
                <Text style={styles.textValue}>
                  {dataDHT.indeksSuhuCelcius}°C
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.textCourse}>Index Temp</Text>
                <Text style={styles.textValue}>
                  {dataDHT.indeksSuhuFahrenheit}°F
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.textCourse2}>Lampu Utama</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.textCourse2}>AC Utama</Text>
              </View>
              {/* <View style={styles.item}>
                <Text style={styles.textCourse}>
                  Praktikum Keamanan Sistem Informasi
                </Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.textCourse}>Praktikum Pemrograman Web</Text>
              </View> */}
            </View>
          </ScrollView>
        </View>

        {/* <Text>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={() => sendNotif()}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>

       */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    zIndex: 2,
  },

  dashboardImage: {
    position: 'absolute',
    top: '9%',
    right: 0,
    width: 180,
    height: 180,
    opacity: 0.6,
  },
  helloUser: {
    position: 'absolute',
    width: '88%',
    height: '5%',
    left: '6%',
    top: '15%',

    fontFamily: 'Avenir LT Pro',
    fontWeight: 'bold',
    fontSize: 28,
    lineHeight: 34,

    /* identical to box height */

    color: '#0D1333',
  },

  helloUser2: {
    position: 'absolute',
    width: '88%',
    height: 36,
    left: '6%',
    top: '21%',

    fontFamily: 'Avenir LT Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 29,

    /* identical to box height */

    color: '#61688B',
  },

  menu: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: '6%',
    top: '5%',
  },

  profile: {
    position: 'absolute',
    width: 55,
    height: 55,
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 0.2,
  },

  buttonProfile: {
    position: 'absolute',
    width: 55,
    height: 55,
    left: '6%',
    top: '6%',
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 0.2,
  },

  searchBox: {
    // width: 300,
    // backgroundColor: 'rgba(255, 255,255,0.2)',
    // borderRadius: 25,
    paddingHorizontal: 30,
    // fontSize: 16,
    // color: '#ffffff',
    // marginVertical: 10,
    position: 'absolute',
    width: '90%',
    height: '4%',
    // left: 24,
    top: '31%',
    backgroundColor: '#F5F5F7',
    borderRadius: 40,
  },

  categories: {
    position: 'absolute',
    width: '60%',
    // height: 24,
    left: '6%',
    top: '40%',

    fontFamily: 'Avenir LT Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,

    /* identical to box height */

    color: '#0D1333',
  },

  filter: {
    position: 'absolute',
    width: '40%',
    // height: 22,
    right: '6%',
    top: '40.2%',

    fontFamily: 'Avenir LT Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 22,

    /* identical to box height */
    textAlign: 'right',
    textTransform: 'capitalize',

    color: '#009688',
  },

  buttonLogout: {
    alignSelf: 'center',
    width: '90%',

    backgroundColor: '#FF6670',

    borderRadius: 25,

    marginVertical: 10,

    paddingVertical: 10,
  },

  button: {
    width: 300,

    backgroundColor: '#1c313a',

    borderRadius: 25,

    marginVertical: 10,

    paddingVertical: 13,
  },

  profileDetail: {
    alignSelf: 'center',
    width: '90%',

    // backgroundColor: '#FF6670',

    borderRadius: 25,

    marginVertical: 10,

    paddingVertical: 10,
  },

  buttonTextProfile: {
    fontSize: 16,

    fontWeight: '500',
    fontWeight: 'bold',
    color: '#0D1333',

    textAlign: 'center',
  },

  buttonText: {
    fontSize: 16,

    fontWeight: '500',

    color: '#ffffff',

    textAlign: 'center',
  },
  box: {
    // top: 40,
    flexWrap: 'wrap',
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
  item: {
    width: '45%',
    height: 180,
    backgroundColor: '#B2DFDB',
    borderRadius: 25,
    margin: 8,
    marginVertical: 20,
  },

  courses: {
    width: '88%',
    top: '35%',
  },

  textCourse: {
    // position: 'absolute',
    width: '90%',
    // height: 22,
    left: '7%',
    top: '7%',
    textAlign: 'center',

    fontFamily: 'Avenir LT Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,

    /* identical to box height */

    color: '#f5f5f5',
  },

  textCourse2: {
    // position: 'absolute',
    width: '90%',
    // height: 22,
    left: '7%',
    top: '25%',
    textAlign: 'center',

    fontFamily: 'Avenir LT Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 27,
    // lineHeight: 22,

    /* identical to box height */

    color: '#fff',
  },

  textValue: {
    // position: 'absolute',
    width: '100%',
    // height: 200,
    // left: '7%',
    top: '30%',
    textAlign: 'center',

    fontFamily: 'Avenir LT Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    // lineHeight: 22,

    /* identical to box height */

    color: '#fff',
  },

  textValue2: {
    // position: 'absolute',
    width: '100%',
    // height: 200,
    // left: '7%',
    top: '15%',
    textAlign: 'center',

    fontFamily: 'Avenir LT Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    // lineHeight: 22,

    /* identical to box height */

    color: '#fff',
  },
});

export default DashboardUser;
