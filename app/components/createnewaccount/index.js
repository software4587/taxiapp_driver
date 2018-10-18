import React, { Component } from 'react';
import { ScrollView, View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header.js';

export default class CreateNewAccount extends Component
{
  static navigationOptions = {
    header:null,
 };
  render()
  {
    return (
      <ImageBackground source={require('../images/regbackground.jpg')}  style={styles.container}>
        <Header name="SIGN UP" />
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={require('../images/app_logo.png')} style= {styles.logoStyle} />
        </View>
        <View style={styles.section1}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'#FFFFFF'}}>Create New Account </Text>
          <Text style={{fontSize:15,color:'#FFFFFF'}}>Fill following information to get register</Text>
        </View>
        <View style={styles.regContainer}>
        <View style={styles.loginFields}>
        <View style={{marginBottom:10}}>
          <View style={{marginBottom:10, justifyContent:'center'}}>
          <Text style={{color:'#555555',fontSize:20,fontWeight:'bold'}}>Welcome User</Text>
          </View>
          </View>
          <View style={styles.SectionStyle}>
          <Image
            source={require('../images/mailiconblack.png')}
            style={styles.iconStyle}
          />
          <TextInput
          placeholder='Your Email'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>
          <View style={styles.SectionStyle}>
          <Image
            source={require('../images/user_icon.png')}
            style={styles.iconStyle}
          />
          <TextInput
          placeholder='Your Name'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>
          <View style={styles.SectionStyle}>
          <Image
            source={require('../images/key.png')}
            style={styles.iconStyle}
          />
          <TextInput
          placeholder='Your Password'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <Image
            source={require('../images/id-login.png')}
            style={styles.iconStyle}
          />
          <TextInput
          placeholder='Driving Licence No.'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={{marginBottom:15, justifyContent:'center', flexDirection:'row'}}>
          <View>
          <Image
            source={require('../images/radio.png')}
            style={styles.iconStyle}
          />
          </View>
          <View>
          <Text style={{color:'#555555'}}>I agree with Term & Condition</Text>
          <Text style={{color:'#555555'}}>and Privacy Policy</Text>
          </View>
          </View>

        </View>
        <View style={styles.section2}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CompleteRegistration')}style={{backgroundColor:'#F3C143', height:45, borderRadius:10,alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>SIGN UP</Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
     </ImageBackground>
  );
  }
}
const styles = StyleSheet.create({
  regContainer:{
    padding:10,
    backgroundColor:'#FFFFFF',
    width:280,
    height:350,
    justifyContent:'space-around',
    borderRadius:10,
    marginLeft:40,
    marginBottom:60,
    marginTop:5,

  },
  container:{
    flex:1,
    //justifyContent:'center',
    //alignItems:'center',
    //width:'80%',
    //height:'100%',
  },
  logoStyle:{
    width:80,
    height:80
  },
  logoContainer:{
    flex:1,
    width:40,
    height:40,
    marginTop:10,   
    marginLeft:40
  },
  section1:{
    flex:1,
    marginBottom:5,
    marginTop:35,
    marginLeft:45,
    //backgroundColor:'green'
  },
  section2:{
    marginBottom:30,
    marginLeft:25,
    marginRight:25
  },
  loginFields:{
    marginBottom:50,
    marginLeft:25,
    marginRight:25,
    marginTop:20
     //backgroundColor:'green'
  },
  iconStyle:{
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    alignItems: 'flex-start'
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 40,
    borderRadius: 10 ,
    //margin: 10,
    shadowColor:'#555555',
    shadowOpacity:0.8,
    shadowRadius:2,
    borderColor: '#dddddd',
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
    marginBottom:10
},
input: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#424242',
    width:300
},
});
