import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../header';

export default class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
    drawerLabel: 'Any Query',
    header:null,
    drawerIcon: ({ tintColor }) => (
     <Image
       source={require('../images/search.png')}
       style={[styles.icon, {tintColor: '#ffffff'}]}
     />
   )
  };

  render() {
    const myButton = (
      <Icon name="arrow-left" size={20} color="#fff" onPress={() =>  this.props.navigation.toggleDrawer()} />
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
          <View style={{width: 300, marginTop:5, height: 50, padding: 10}} ><Header name="Any Query" /></View>
          </View>
      </LinearGradient>
      <View
          style={{ width: 375,height: 600}}>
            <View style={styles.SectionStyle}>
              <Icon name="user" width={20} style={styles.ImageStyle}/>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.input}
                placeholder="Enter Your Name..."
              />
            </View>
            <View style={styles.SectionStyle}>
              <Icon name="envelope-o" width={20} style={styles.ImageStyle}/>
              <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
                placeholder="Enter Your Email..."
              />
            </View>

            <View style={styles.SectionStyle}>
            <Icon name="comment" width={20} style={styles.ImageStyle}/>
              <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
                 placeholder="Enter Your Query..."
              />
            </View>
            <View style={styles.sec3} >
              <TouchableOpacity style={styles.regbtn}>
                <Text style={{color: '#fff',fontWeight: 'bold',fontSize: 20, paddingTop: 2}}>SEND!</Text>
              </TouchableOpacity>
          </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sec3:{
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 200
  },

  regbtn:{
    width: 100,
    height: 45,
    backgroundColor: '#fe7b3a',
    alignItems: 'center',
    borderRadius: 25,
    padding:5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    flex:1
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 25 ,
    margin: 10
},

ImageStyle: {
    padding: 10,
    margin: 5,
    height: 55,
    width: 35,
    alignItems: 'flex-start'
},
icon:{
  width:24,
  height:24
},
input: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#424242',
    width:300
},
searchIcon: {
    padding: 10,
}
});
