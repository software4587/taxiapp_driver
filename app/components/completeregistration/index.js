import React, { Component } from 'react';
import { ScrollView, View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header.js';
export default class CompleteRegistration extends Component
{
  static navigationOptions = {
    header:null,
 };
  render()
  {
    return (
      <ImageBackground source={require('../images/regbackground.jpg')}  style={styles.container}>
      <Header name="COMPLETE SIGNUP" /> 
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={require('../images/app_logo.png')} style= {styles.logoStyle} />
        </View>
        <View style={styles.section1}>
          <Text style={{fontSize:22,fontWeight:'bold',color:'#FFFFFF'}}>Complete Registration </Text>
          <Text style={{fontSize:15,color:'#FFFFFF'}}>Please complete your registration here</Text>
        </View>

        <View style={styles.regContainer}>
        <View style={styles.loginFields}>
          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Select Car Brand'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>
          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Select Car Model'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Car Licence Number'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Account Name'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Account Number'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Bank Name'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='IFSC CODE'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>
        </View>
        <View style={styles.section2}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProfile')}style={{backgroundColor:'#F3C143', height:45, borderRadius:10,alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>COMPLETE SIGNUP</Text>
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
    backgroundColor:'#FFFFFF',
    width:280,
    height:400,
    justifyContent:'space-around',
    borderRadius:10,
    marginLeft:40,
    marginBottom:10,
    marginTop:5


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
    marginTop:60,
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
    marginBottom:35,
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
    marginBottom:5,
    paddingHorizontal:10

},
input: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#424242',
    width:300
},
});
