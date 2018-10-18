import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default class Welcome extends Component
{
  static navigationOptions = {
    header:null,
 };
  render()
  {

    return (
      <ImageBackground source={require('../images/pulkit.jpg')}  style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={require('../images/app_logo.png')} style= {styles.logoStyle} />
      </View>
      <View style={styles.section1}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'#FFFFFF'}}>{"What's your number?"} </Text>
        <Text style={{fontSize:15,color:'#FFFFFF'}}>{"We'll text you code to verify your phone"}</Text>
      </View>
      <View style={styles.loginFields}>
      <View style={{marginBottom:10}}>
        <TextInput
        style={{backgroundColor:'#FFFFFF', borderRadius:10,height:50}}
        placeholder='+65   Your Phone Number'
        underlineColorAndroid='transparent'
        textAlign='center'
        />
        </View>
        <View style={styles.SectionStyle}>
        <Image source={require('../images/key.png')} style= {styles.iconStyle} />
        <TextInput
        style={{backgroundColor:'#FFFFFF', borderRadius:10,height:50,width:200}}
        placeholder='   Your Password' 
        underlineColorAndroid='transparent'
        textAlign='left'

        />
        </View>
        <View style={{marginTop:20, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'#FFFFFF'}}>Forgot Your Password?</Text>
        </View>
      </View>
      <View style={styles.section2}>
      <TouchableOpacity style={{backgroundColor:'#F3C143', height:50, borderRadius:10,alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>LOGIN</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-around', marginTop:10, width:260, marginLeft:60, marginBottom:20}}>
      <View>
        <Text onPress={() =>  this.props.navigation.navigate('CreateNewAccount')} style={{color:'#be98db',fontSize:18}}>Not A Member? </Text>
      </View>
        <View>
          <Text onPress={() =>  this.props.navigation.navigate('CreateNewAccount')} style={{color:'#FFFFFF',fontSize:18}}>Create Account</Text>
        </View>
        </View>
     </ImageBackground>
  );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    //justifyContent:'center',
    //alignItems:'center',
    //width:'80%',
    //height:'100%',
  },
  logoStyle:{
    width:100,
    height:100
  },
  logoContainer:{
    flex:1,
    width:100,
    height:100,
    marginTop:60,
    marginLeft:10
  },
  section1:{
    flex:1,
    marginTop:25,
    marginLeft:25,
    //backgroundColor:'green'
  },
  section2:{
    flex:1,
    marginBottom:60,
    marginLeft:25,
    marginRight:25
  },
  loginFields:{
    marginBottom:30,
    marginLeft:25,
    marginRight:25,
    marginTop:5
     //backgroundColor:'green'
  },
  iconStyle:{
    padding: 10,
    marginLeft: 15,
    height: 25,
    width: 25,
    alignItems: 'center'
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
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
});
