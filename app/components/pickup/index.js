import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header.js';

export default class Pickup extends Component
{
  static navigationOptions = {
    header:null,
 };
  render()
  {
    return (
      <View  style={styles.container}>
      <Header name="PICKUP" />


          <View style={styles.detailSection}>
            <View style={{flexDirection:'row'}}>
              <Text style={{marginLeft:20,fontWeight:'bold',fontSize:15}}>Scarlet Johnson</Text>

              <View style={{ marginLeft:20,backgroundColor:'#fccb32',width:50,
                alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:5}}>
              <Image source={require('../images/star_white.png')} style= {styles.imageFooter} />
              <Text style={{fontWeight:'bold',color:'#FFFFFF'}}>4.7</Text>
              </View>
            </View>
              <Text style={{marginLeft:20}}>Booking ID: #212154</Text>
              <View style={{flexDirection:'row', paddingTop:10}}>
              <Text style={{marginLeft:20,fontWeight:'bold',color:'gray'}}>13.2km</Text>
              <Text style={{marginLeft:20,fontWeight:'bold',color:'red'}}>SGD 12.65</Text>
              </View>

              <View style={{flexDirection:'row',marginLeft:20,marginTop:5}}>

                <Image source={require('../images/redlight.png')} style= {styles.imageFooter} />

                <View style={{marginLeft:15}}>
                <Text style={{fontSize:10,fontWeight:'bold'}}>PICKUP LOCATION</Text>
                <Text>Eunos Road 8 #05-03 Singapore</Text>
                </View>
              </View>

              <View style={{flexDirection:'row',marginLeft:20,marginTop:5}}>

                <Image source={require('../images/green_icon.png')} style= {styles.imageFooter} />

                <View style={{marginLeft:15}}>
                <Text style={{fontSize:10,fontWeight:'bold'}}>DROP-OFF LOCATION</Text>
                <Text>Eunos Road 8 #05-03 Singapore</Text>
                </View>
              </View>
              <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', paddingTop:15}}>
              <TouchableOpacity style={{backgroundColor:'red', height:35, width:150, borderRadius:10,alignItems:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:10,fontWeight:'bold',color:'#FFFFFF'}}>I AM HERE</Text>
             </TouchableOpacity>
             <TouchableOpacity style={{backgroundColor:'green', height:35, width:150, borderRadius:10,alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:10,fontWeight:'bold',color:'#FFFFFF'}}>PICK UP</Text>
            </TouchableOpacity>
              </View>
          </View>

          <View style={styles.talkSection}>
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../images/phone-green.png')} style= {styles.iconTalk} />
            <Text>Call</Text>
            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../images/inbox.png')} style= {styles.iconTalk} />
            <Text>Chat</Text>
            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../images/cross.png')} style= {styles.iconTalk} />
            <Text>Cancel</Text>
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
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('MyCredits')}>My Credits</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('MyRide')}>Dashboard</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('Settings')}>My Balance</Text>
          <Text style={{marginLeft:0}}>Get Help</Text>
          </View>
          </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonsStyle:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  iconTalk:{
    width:70,
    height:70
  },
  paymentSections: {
    marginBottom:8,
    height:40,
    width:325,
    flexDirection:'row',
    backgroundColor:'#FFFFFF'
  },
  talkSection:{
    flexDirection:'row',
    marginTop:20
  },
  avatarImage:{
    width:70,
    height:70
  },
  startStyle:{
    width:20,
    height:20
  },
  imageFooter:{
    width:15,
    height:15
  },
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
    alignItems:'flex-start',
    flexDirection:'row',
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
    width:325,
    height:200,
    backgroundColor:'#FFFFFF',
    marginBottom:5,
    marginTop:150
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
    marginTop:10, 
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
