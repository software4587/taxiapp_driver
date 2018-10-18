import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Footer extends Component {
  render() {
      return (
        <View style={styles.sectionFooter}>
        <View style={{marginBottom:15, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>

        <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image source={require('./images/user_icon.png')} style= {styles.footerIconStyle} />
        <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('EditProfile')}>My Profile  </Text>
        </View>

        <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image source={require('./images/file-bag.png')} style= {styles.footerIconStyle} />
        <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('BuyCredits')}>Buy Credits </Text>
        </View>

        <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image source={require('./images/app_logo.png')} style= {styles.footerIconStyle} />
        <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('Dashboard')}>Dashboard  </Text> 
        </View>

        <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image source={require('./images/dollar.png')} style= {styles.footerIconStyle} />
        <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('Pickup')}>PickUp  </Text>
        </View>

        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image source={require('./images/gethelp.png')} style= {styles.footerIconStyle} />
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('Dropoff')}>Drop Off</Text>
        </View>

        </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  sectionFooter:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf: 'stretch',
    marginTop:30,
    backgroundColor:'#FFFFFF',
    height:70
  },
  section6Inner:{
    flexDirection:'row',
    height:30,
    backgroundColor:'#FFFFFF',
    justifyContent:'space-between',
    alignSelf: 'stretch',
    marginTop:10
  },
  footerIconStyle:{
    width:30,
    height:30,
    //marginLeft:10,
    //marginBottom:20
  },
});
