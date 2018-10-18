import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image } from 'react-native';

export default class Home extends Component
{
  componentDidMount(){
    this.timeoutHandle = setTimeout(()=>{
            this.props.navigation.navigate('Welcome')      
       }, 5000);
  }
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
     </ImageBackground>
  );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100%'
  },
  logoStyle:{
    width:200,
    height:200
  },
  logoContainer:{
    flex:1,
    width:200 ,
    height:200,
    justifyContent:'center',
    alignItems:'center'
  }
});
