import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header';

export default class MyRide extends Component
{
  static navigationOptions = {
    header:null,
 };
  render()
  {
    return (
      <View  style={styles.container}>
        <Header name="MY RIDES" />
          <View style={styles.section2}>
          <View>
            <Text style={{fontSize:15,fontWeight:'bold'}}>MERCEDES CLA</Text>
            <Text>Sonas Road 8</Text>
            <Text>Sonas Road 89</Text>
            <Text style={{fontWeight:'bold'}}>$12.50</Text>
          </View>
          <View style={{paddingLeft:110, alignItems:'flex-end'}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Tues 23, 2018, 20:30</Text>
            <Text>In-Progress</Text>

            <View style={{ width:55,
              alignItems:'center'}}>
              <Image source={require('../images/girl.png')} style= {styles.imageAvatar} />
            </View>

            <View style={{ backgroundColor:'#fccb32',width:55,
              alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:5}}>
            <Image source={require('../images/star_white.png')} style= {styles.imageFooter} />
            <Text style={{fontWeight:'bold',color:'#FFFFFF'}}>4.7</Text></View>
          </View>
          </View>

          <View style={styles.section2}>
          <View>
            <Text style={{fontSize:15,fontWeight:'bold'}}>MERCEDES CLA</Text>
            <Text>Sonas Road 8</Text>
            <Text>Sonas Road 89</Text>
            <Text style={{fontWeight:'bold'}}>$12.50</Text>
          </View>
          <View style={{paddingLeft:110, alignItems:'flex-end'}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Tues 23, 2018, 20:30</Text>
            <Text>In-Progress</Text>

            <View style={{ width:55,
              alignItems:'center'}}>
              <Image source={require('../images/girl.png')} style= {styles.imageAvatar} />
            </View>

            <View style={{ backgroundColor:'#fccb32',width:55,
              alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:5}}>
            <Image source={require('../images/star_white.png')} style= {styles.imageFooter} />
            <Text style={{fontWeight:'bold',color:'#FFFFFF'}}>4.7</Text></View>
          </View>
          </View>

          <View style={styles.section2}>
          <View>
            <Text style={{fontSize:15,fontWeight:'bold'}}>MERCEDES CLA</Text>
            <Text>Sonas Road 8</Text>
            <Text>Sonas Road 89</Text>
            <Text style={{fontWeight:'bold'}}>$12.50</Text>
          </View>
          <View style={{paddingLeft:110, alignItems:'flex-end'}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Tues 23, 2018, 20:30</Text>
            <Text>In-Progress</Text>

            <View style={{ width:55,
              alignItems:'center'}}>
              <Image source={require('../images/girl.png')} style= {styles.imageAvatar} />
            </View>

            <View style={{ backgroundColor:'#fccb32',width:55,
              alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:5}}>
            <Image source={require('../images/star_white.png')} style= {styles.imageFooter} />
            <Text style={{fontWeight:'bold',color:'#FFFFFF'}}>4.7</Text></View>
          </View>
          </View>

          <View style={styles.section6}>
          <View style={styles.section6Inner}>
            <Image source={require('../images/user_icon.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images//file-bag.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/app_logo.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/key.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/user_icon.png')} style= {styles.footerIconStyle} />
          </View>

          <View style={styles.section6Inner}>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('EditProfile')}>My Profile</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('Payment')}>Transactions</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('MyRide')}>Ride Now</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('Settings')}>Settings</Text>
          <Text style={{marginLeft:0}}>Get Help</Text>
          </View>
          </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageFooter:{
    width:15,
    height:15
  },

  imageAvatar:{
    width:18,
    height:25
  },

  container:{
    flex:1,
    backgroundColor:'#f5f6f8',
    justifyContent:'flex-start',
    alignItems:'center'
  },

  footerIconStyle:{
    width:30,
    height:30,
    marginLeft:10,
    marginBottom:50
  },

  section2:{
    flexDirection:'row',
    paddingLeft:25,
    backgroundColor:'#FFFFFF',
    marginTop:10,
    alignSelf: 'stretch',
    height:100
  },
  section6:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf: 'stretch',
    height:100,
    marginTop:70,
    backgroundColor:'#FFFFFF'
  },
  section6Inner:{
    flexDirection:'row',
    height:30,
    backgroundColor:'#FFFFFF',
    justifyContent:'space-between',
    alignSelf: 'stretch',
    marginTop:5
  },

  iconStyle:{
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    alignItems: 'flex-start'
  }
});
