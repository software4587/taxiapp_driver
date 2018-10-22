import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header';
import Footer from '../footer.js';
import {Font} from 'expo';

export default class MyBookings extends Component
{
  static navigationOptions = {
    header:null,
 };

 state = {
     fontLoaded: false,
 };

 async componentDidMount() {
     await Font.loadAsync({
         'GothamBold': require('../../../assets/fonts/GothamBold.ttf'),
         'GothamBook': require('../../../assets/fonts/GothamBook.ttf'),

         'GothamBookItalic': require('../../../assets/fonts/GothamBookItalic.ttf'),
         'GothamUltraItalic': require('../../../assets/fonts/Gotham-UltraItalic.otf'),
     });
     this.setState({fontLoaded: true});
 }


  render()
  {
    return (
      <View  style={styles.container}>
      <View style={{flex:1}}>
      {
          this.state.fontLoaded ? (
        <Header name="MY BOOKINGS" fontFamily="GothamBold"/>
      ):null
      }
          <View style={styles.section2}>
          <View>
            <Text style={{fontSize:10,fontWeight:'bold', fontFamily:'GothamBold'}}>SCARLET JOHANSON</Text>
            <Text style={{color:'#888888', fontFamily:'GothamBook'}}>BOOKING ID #4541414</Text>
            <Text style={{fontFamily:'GothamBook'}}>Sonas Road 89</Text>
            <Text style={{fontFamily:'GothamBook'}}>Sonas Road 56</Text>
            <Text style={{fontFamily:'GothamBold'}}>$12.50</Text>
          </View>
          <View style={{paddingLeft:30, alignItems:'flex-end'}}>
            <Text style={{fontSize:15,fontWeight:'bold',fontFamily:'GothamBook'}}>Tues 23, 2018, 20:30</Text>
            <Text style={{color:'#dfb328',fontFamily:'GothamBook'}}>In-Progress</Text>
          </View>
          </View>


          <View style={styles.section2}>
          <View>
            <Text style={{fontSize:10,fontWeight:'bold', fontFamily:'GothamBold'}}>SCARLET JOHANSON</Text>
            <Text style={{color:'#888888',fontFamily:'GothamBook'}}>BOOKING ID #4541414</Text>
            <Text style={{fontFamily:'GothamBook'}}>Sonas Road 89</Text>
            <Text style={{fontFamily:'GothamBook'}}>Sonas Road 56</Text>
            <Text style={{fontFamily:'GothamBold'}}>$12.50</Text>
          </View>
          <View style={{paddingLeft:30, alignItems:'flex-end'}}>
            <Text style={{fontSize:15,fontWeight:'bold',fontFamily:'GothamBook'}}>Tues 23, 2018, 20:30</Text>
            <Text style={{color:'#1fd177',fontFamily:'GothamBook'}}>Completed</Text>
          </View>
          </View>


          <View style={styles.section2}>
          <View>
            <Text style={{fontSize:10,fontWeight:'bold',fontFamily:'GothamBold'}}>SCARLET JOHANSON</Text>
            <Text style={{color:'#888888',fontFamily:'GothamBook'}}>BOOKING ID #4541414</Text>
            <Text style={{fontFamily:'GothamBook'}}>Sonas Road 89</Text>
            <Text style={{fontFamily:'GothamBook'}}>Sonas Road 56</Text>
            <Text style={{fontFamily:'GothamBold'}}>$12.50</Text>
          </View>
          <View style={{paddingLeft:30, alignItems:'flex-end'}}>
            <Text style={{fontSize:15,fontWeight:'bold',fontFamily:'GothamBook'}}>Tues 23, 2018, 20:30</Text>
            <Text style={{color:'#f4371e',fontFamily:'GothamBook'}}>Cancelled</Text>
          </View>
          </View>
      </View>
        <Footer />
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
    marginTop:125,
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
