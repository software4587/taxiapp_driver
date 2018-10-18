import React, { Component } from 'react';
import { ScrollView, View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header';

export default class LeaveReview extends Component
{
  static navigationOptions = {
    header:null,
 };
  render()
  {
    return (
      <View style={styles.container}>
      <Header name="LEAVE A REVIEW" />
      <View style={{width:300, marginBottom:10}}>

    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../images/man01.png')} style= {styles.logoStyle} />
      <Text>John Deo</Text>
      <Text>Mercedes CLA</Text>
      <Text>SGP 1386H</Text>
    </View>

    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../images/star_yellow.png')} style= {styles.ratingStarStyle} />
      <Image source={require('../images/star_yellow.png')} style= {styles.ratingStarStyle} />
      <Image source={require('../images/star_yellow.png')} style= {styles.ratingStarStyle} />
      <Image source={require('../images/star_gray.png')} style= {styles.ratingStarStyle} />
      <Image source={require('../images/star_gray.png')} style= {styles.ratingStarStyle} />
    </View>
          <View style={{marginTop:35}}>
          <View style={styles.SectionStyle}>
            <TextInput
            placeholder='Scarlet Johansan'
            underlineColorAndroid='transparent'
            style={styles.input}
            />
          </View>







         <TouchableOpacity onPress={() => this.props.navigation.navigate('Pickup')}style=

{{backgroundColor:'#F3C143', height:45, borderRadius:10,alignItems:'center',

justifyContent:'center',marginTop:25}}>
       <Text style={{fontSize:20,fontWeight:'bold'}}>UPDATE</Text>
     </TouchableOpacity>
     </View>

      <View style={{alignItems:'center',justifyContent:'center',marginTop:15}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Cancel</Text>
      </View>



        </View>

        <View style={styles.section6}>
        <View style={styles.section6Inner}>
          <Image source={require('../images/user_icon.png')} style=

{styles.footerIconStyle} />
          <Image source={require('../images/file-bag.png')} style= {styles.footerIconStyle} />
          <Image source={require('../images/app_logo.png')} style=

{styles.footerIconStyle} />
          <Image source={require('../images/settinggear.png')} style= {styles.footerIconStyle} />
          <Image source={require('../images/user_icon.png')} style=

{styles.footerIconStyle} />
        </View>

        <View style={styles.section6Inner}>
        <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate

('EditProfile')}>My Profile</Text>
        <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate

('Payment')}>Transactions</Text>
        <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('MyRide')}>Ride Now</Text>
        <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate

('Address')}>Addresses</Text>
        <Text style={{marginLeft:0}}>Get Help</Text>
        </View>
        </View>



      </View>
  );
  }
}
const styles = StyleSheet.create({
  photoSection:{
      marginTop:300
  },
  footerIconStyle:{
    width:30,
    height:30,
    marginLeft:10,
    marginBottom:50
  },
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
  },
  section6:{
    alignItems:'center',
    justifyContent:'flex-end',
    alignSelf: 'stretch',
    height:80,
    marginTop:80,
    backgroundColor:'#FFFFFF',
   },
  section6Inner:{
    flexDirection:'row',
    height:20,
    justifyContent:'space-between',
    alignSelf: 'stretch',
    marginBottom:25,
    paddingTop:7

  },
  logoStyle:{
    width:80,
    height:80
  },
  ratingStarStyle:{
    width:30,
    height:30
  },
  logoContainer:{
    alignItems:'center',
    backgroundColor:'red',
    marginTop:50,
    height:50,
    width:50
  },
  section1:{
    flex:1,
    marginBottom:5,
    marginTop:35,
    marginLeft:45,
    //backgroundColor:'green'
  },
  section2:{
    marginBottom:60,
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
    height: 40,
    borderRadius: 10 ,
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
    width:300,
    marginLeft: 20
},
imageContainer:
{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    width:50,
    height:50
}
});
