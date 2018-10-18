import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../header';

export default class Aboutus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  static navigationOptions = {
		drawerLabel: 'About Us',
    header:null,
    drawerIcon: ({ tintColor }) => (
     <Image
       source={require('../images/aboutus.png')}
       style={[styles.icon, {tintColor: '#ffffff'}]}
     />

   )
	};

  render() {
    const myButton = (
      <Icon name="arrow-left" size={20} color="#fff" onPress={() =>  this.props.navigation.navigate('Home')} />
    );

    return (
      <View style={styles.container}>
      <LinearGradient
          colors={['#75b3e5','#b96dc4']}
          start={[0.0, 0.8]}
          end={[1.0, 0.5]}
          style={{ width: 375,height: 70 }}>

          <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{marginLeft:20, marginTop:25, width: 40, height: 50, padding: 10}}>{ myButton }</View>
          <View style={{width: 300, marginTop:5, height: 50, padding: 10}} ><Header name="About Us" /></View>
          </View>
      </LinearGradient>
      <View
          style={{ width: 375,height: 600 }}>
            <View style={styles.headOfficeContainer}>
            <Text style={{fontWeight: 'bold',fontSize: 25, paddingTop: 5, alignSelf: 'center'}}>
              Head Office
            </Text>
            <View>
              <Text>Sco 52, Sector 48, Near Gurudwara</Text>
            </View>
            <View>
            <Text>Chandigarh (258458)</Text>
            </View>
            </View>

            <View style={styles.headOfficeContainer}>
              <Text style={{fontWeight: 'bold',fontSize: 25, paddingTop: 5, alignSelf: 'center'}}>
                Branch Office
              </Text>
              <View>
                <Text>Sco 52, Sector 48, Near Gurudwara</Text>
              </View>
              <View>
                <Text>Chandigarh (258458)</Text>
              </View>
            </View>

            <View style={styles.SectionStyle}>
              <TextInput
              style={{flex:2, alignSelf: 'center',textAlign: 'left', padding: 10}}
                underlineColorAndroid="transparent"
                placeholder=" Enter Email"
              />
              <Icon name="paper-plane" width={30} style={styles.ImageStyle}/>
            </View>

            <View style={{flex: 3, width: 300,flexDirection: 'row', marginTop: 35, marginLeft: 35, justifyContent:'space-around'}}>
            <Image
              source={require('../images/facebook.png')}
              style={styles.socialIcon}
            />
            <Image
              source={require('../images/google.png')}
              style={styles.socialIcon}
            />
            <Image
              source={require('../images/twitter.png')}
              style={styles.socialIcon}
            />
            <Image
              source={require('../images/pinterest.png')}
              style={styles.socialIcon}
            />
            <Image
              source={require('../images/instagram.png')}
              style={styles.socialIcon}
            />
            </View>


          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  heading:{
    marginTop: 50
  },
  sec2:{
    width: 350,
    borderColor: 'black',
    marginTop: 40,
    marginLeft: 10
  },
  sec3:{
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 200
  },
  regbtn:{
    width: 150,
    height: 30,
    backgroundColor: '#fe7b3a',
    alignItems: 'center'
  },

  TextInputStyleClass:{

// Setting up Hint Align center.
textAlign: 'left',
padding: 10,
// Setting up TextInput height as 50 pixel.
height: 40,

// Set border width.
 borderWidth: 0.5,

 // Set border Hex Color Code Here.
 borderColor: '#D3D3D3',
},
headOfficeContainer:{
  marginTop: 20,
  marginLeft: 10,
  alignItems: 'center',
  borderColor: '#D3D3D3',
  borderWidth: 0.5,
  width:350,
  height:110

},
ImageStyle: {
    padding: 20,
    margin: 5,
    height: 55,
    width: 55,
    color: '#fe7b3a',
    alignItems: 'flex-end',
    marginLeft: 30
},

SectionStyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: .5,
  borderColor: '#D3D3D3',
  height: 40,
  borderRadius: 25 ,
  top: 30,
  marginLeft: 11,
  width: 350,
  marginTop: 100
},
icon:{
  width:24,
  height:24
},
socialIcon:{
  width:40 ,
  height:40
  //marginRight:12
}
});
