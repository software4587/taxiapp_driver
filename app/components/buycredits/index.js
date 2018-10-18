import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header.js';

export default class BuyCredits extends Component
{
  static navigationOptions = {
    header:null,
 };
  render()
  {
    return (
      <View  style={styles.container}>
      <Header name="BUY CREDITS" />
          <View style={styles.detailSection}>
              <Image source={require('../images/yellow.png')} style= {styles.dollarIconStyle} />
                <View>
                  <Text style={{marginLeft:20}}>100 Credits</Text>
                  <Text style={{marginLeft:20}}>Get 100 Credits in just $10</Text>
                </View>
                <View style={{marginLeft:50, borderWidth:1, backgroundColor:'#FFFFFF',width:45,borderRadius:1,borderColor:'#f2bc35'}}>
                  <Text style={{fontWeight:'bold',color:'#f2bc35',textAlign:'center'}}>GET</Text>
                </View>
          </View>

          <View style={styles.detailSection}>
              <Image source={require('../images/yellow.png')} style= {styles.dollarIconStyle} />
                <View>
                  <Text style={{marginLeft:20}}>100 Credits</Text>
                  <Text style={{marginLeft:20}}>Get 100 Credits in just $10</Text>
                </View>
                <View style={{marginLeft:50, borderWidth:1, backgroundColor:'#FFFFFF',width:45,borderRadius:1,borderColor:'#f2bc35'}}>
                  <Text style={{fontWeight:'bold',color:'#f2bc35',textAlign:'center'}}>GET</Text>
                </View>
          </View>

          <View style={styles.detailSection}>
              <Image source={require('../images/yellow.png')} style= {styles.dollarIconStyle} />
                <View>
                  <Text style={{marginLeft:20}}>100 Credits</Text>
                  <Text style={{marginLeft:20}}>Get 100 Credits in just $10</Text>
                </View>
                <View style={{marginLeft:50, borderWidth:1, backgroundColor:'#FFFFFF',width:45,borderRadius:1,borderColor:'#f2bc35'}}>
                  <Text style={{fontWeight:'bold',color:'#f2bc35',textAlign:'center'}}>GET</Text>
                </View>
          </View>

          <View style={styles.detailSection}>
              <Image source={require('../images/yellow.png')} style= {styles.dollarIconStyle} />
                <View>
                  <Text style={{marginLeft:20}}>100 Credits</Text>
                  <Text style={{marginLeft:20}}>Get 100 Credits in just $10</Text>
                </View>
                <View style={{marginLeft:50, borderWidth:1, backgroundColor:'#FFFFFF',width:45,borderRadius:1,borderColor:'#f2bc35'}}>
                  <Text style={{fontWeight:'bold',color:'#f2bc35',textAlign:'center'}}>GET</Text>
                </View>
          </View>





          <View style={styles.section6}>
          <View style={styles.section6Inner}>
            <Image source={require('../images/user_icon.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/file-bag.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/app_logo.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/dollar.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/gethelp.png')} style= {styles.footerIconStyle} />
          </View>

          <View style={styles.section6Inner}>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('EditProfile')}>My Profile</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('LeaveReview')}>My Credits</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('MyRide')}>Dashboard</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('MyBalance')}>My Balance</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('MyBookings')}>My Bookings</Text>
          </View>
          </View>

      </View>
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
    marginBottom:90,
    marginTop:5,

  }, //#f5f6f8
  container:{
    flex:1,
    backgroundColor:'#f5f6f8',
    justifyContent:'flex-start',
    alignItems:'center',
    //width:'80%',
    //height:'100%',
  },
  dollarIconStyle:{
    width:35,
    height:35
  },
  greenIconStyle:{
    width:20,
    height:20,
    marginLeft:10
  },
  footerIconStyle:{
    width:30,
    height:30,
    marginLeft:10,
    marginBottom:50
  },
  logoStyleHeart:{
    width:20,
    height:20,
    marginLeft:90
  },
  logoContainer:{
    flex:1,
    width:40,
    height:40,
    marginTop:60,
    marginLeft:40
  },
  withdrawSection:{
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    marginTop:4,
    alignSelf: 'stretch',
    height:100
  },
  historyTitle:{
    alignItems:'center',
    flexDirection:'row',
    marginTop:10,
    alignSelf: 'stretch',
    height:25
  },
  detailSection:{
    alignItems:'center',
    flexDirection:'row',
    alignSelf: 'stretch',
    height:90,
    backgroundColor:'#FFFFFF',
    marginBottom:5
  },
  sectionPaymentMethod:{
    alignSelf: 'stretch',
    height:110,
    backgroundColor:'#FFFFFF',
    padding:10
  },

  section6:{
    alignItems:'center',
    justifyContent:'flex-end',
    alignSelf: 'stretch',
    height:80,
    //position:'absolute',
    marginTop:90,     
    marginBottom:0,
    backgroundColor:'#FFFFFF',

  },
  section6Inner:{
    flexDirection:'row',
    height:30,
    backgroundColor:'#FFFFFF',
    justifyContent:'space-between',
    alignSelf: 'stretch',
    marginTop:5
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
