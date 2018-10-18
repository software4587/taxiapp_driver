import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header.js';

export default class Payment extends Component
{
  static navigationOptions = {
    header:null,
 };
  render()
  {
    return (
      <View  style={styles.container}>
      <Header name="PAYMENT" />
          <View style={styles.section1}>
            <Image source={require('../images/green_icon.png')} style= {styles.greenIconStyle} />
            <Text style={{marginLeft:20, fontWeight:'bold'}}>John Doe</Text>
            <Text style={{marginLeft:190, fontWeight:'bold'}}>$12.50</Text>
          </View>

          <View style={styles.section2}>
            <Text style={{fontSize:10,fontWeight:'bold', marginLeft:10}}>HAVE PROMO CODE?</Text>
          </View>

          <View style={styles.section3}>
              <Text style={{marginLeft:20,color:'red'}}>HAPPY20</Text>
              <Text style={{marginLeft:230}}>$2.50</Text>
          </View>

          <View style={styles.section2}>
            <Text style={{fontSize:10,fontWeight:'bold', marginLeft:10}}>TOTAL PAYABLE AMOUNT</Text>
          </View>

          <View style={styles.section3}>
              <Text style={{marginLeft:20}}>Discount</Text>
              <Text style={{marginLeft:230,color:'red'}}>-$2.50</Text>
          </View>

          <View style={styles.section4}>
            <Text style={{marginLeft:20}}>Taxes</Text>
            <Text style={{marginLeft:250}}>$1.50</Text>
          </View>

          <View style={styles.section4}>
            <Text style={{marginLeft:20, fontWeight:'bold'}}>Total Payment</Text>
            <Text style={{marginLeft:200, fontWeight:'bold'}}>$11.50</Text>
          </View>

          <View style={styles.section2}>
            <Text style={{fontSize:10,fontWeight:'bold', marginLeft:10}}>SELECT PAYMENT METHOD</Text>
          </View>

          <View style={styles.sectionPaymentMethod}>
              <Text style={{marginLeft:20}}>By Voucher</Text>
              <Text style={{marginLeft:20}}>By Cash</Text>

              <View style={{paddingTop:20}}>
              <Text style={{marginLeft:20}}>Your Voucher Number</Text>
              <Text style={{marginLeft:20}}>5252525252</Text>
              </View>
          </View>

          <View style={styles.processBtn}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Pickup')}style={{backgroundColor:'#F3C143', height:45, width: 250, borderRadius:10,alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>PROCEED NOW</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.section6}>
          <View style={styles.section6Inner}>
            <Image source={require('../images/user_icon.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/key.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/app_logo.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/key.png')} style= {styles.footerIconStyle} />
            <Image source={require('../images/user_icon.png')} style= {styles.footerIconStyle} />
          </View>

          <View style={styles.section6Inner}>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('EditProfile')}>My Profile</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('LeaveReview')}>Review</Text>
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
  section1:{
    //flex:1,
    //marginBottom:5,
    //marginTop:20,
    //marginLeft:45,
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    flexDirection:'row',
    marginTop:4,
    alignSelf: 'stretch',
    height:60,

  },
  section2:{
    alignItems:'center',
    flexDirection:'row',
    marginTop:10,
    alignSelf: 'stretch',
    height:25
  },
  processBtn:{
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row',
    marginTop:25,
    alignSelf: 'stretch',
    height:25,
    width:200,
    paddingLeft:20,
    paddingRight:20,
    marginLeft:80,
    marginBottom:5
  },
  section3:{
    alignItems:'center',
    flexDirection:'row',
    //marginTop:10,
    alignSelf: 'stretch',
    height:25,
    backgroundColor:'#FFFFFF'
  },
  sectionPaymentMethod:{
    alignSelf: 'stretch',
    height:110,
    backgroundColor:'#FFFFFF',
    padding:10
  },
  section4:{
    alignItems:'center',
    flexDirection:'row',
    marginTop:2,
    alignSelf: 'stretch',
    height:25,
    backgroundColor:'#FFFFFF'
  },
  section5:{
    alignItems:'center',
    flexDirection:'row',
    //marginTop:10,
    alignSelf: 'stretch',
    height:25,
    marginTop:2,
    backgroundColor:'#FFFFFF'
  },

  section6:{
    alignItems:'center',
    justifyContent:'flex-end',
    alignSelf: 'stretch',
    height:80,
    marginTop:10,
    marginBottom:25,
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
