import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header';

export default class BookRide extends Component
{
  static navigationOptions = {
    header:null,
 };
  render()
  {
    return (
      <View  style={styles.container}>
        <Header name="HOME" />
          <View style={{width:380,height:350}}>
              <Image source={require('../images/homeride01.png')} />        
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
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('Payment')}>Transactions</Text>
          <Text style={{marginLeft:0}}>Ride Now</Text>
          <Text style={{marginLeft:0}} onPress={() =>  this.props.navigation.navigate('Pickup')}>Pickup</Text>
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
    alignItems:'center'
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
    //alignItems:'flex-start',
    backgroundColor:'#FFFFFF',
    //flexDirection:'row',
    marginTop:50,
    alignSelf: 'stretch',
    height:175,
    //paddingTop:10
  },
  section1Inner:{
    //flex:1,
    //marginBottom:5,
    //marginTop:20,
    //marginLeft:45,
    alignItems:'flex-start',
    backgroundColor:'#FFFFFF',
    flexDirection:'row',
    //marginTop:80 ,
    alignSelf: 'stretch',
    height:30,
    paddingTop:10
  },
  section2:{
    alignItems:'center',
    flexDirection:'row',
    marginTop:10,
    alignSelf: 'stretch',
    height:35
  },
  section3:{
    alignItems:'center',
    flexDirection:'row',
    //marginTop:10,
    alignSelf: 'stretch',
    height:35,
    backgroundColor:'#FFFFFF'
  },
  section4:{
    alignItems:'center',
    flexDirection:'row',
    marginTop:2,
    alignSelf: 'stretch',
    height:35,
    backgroundColor:'#FFFFFF'
  },
  section5:{
    alignItems:'center',
    flexDirection:'row',
    //marginTop:10,
    alignSelf: 'stretch',
    height:35,
    marginTop:2,
    backgroundColor:'#FFFFFF'
  },

  section6:{
    alignItems:'center',
    justifyContent:'flex-end',
    alignSelf: 'stretch',
    height:80,
    marginBottom:100,
    marginTop:80,
    backgroundColor:'#FFFFFF',
  },
  section6Inner:{
    flexDirection:'row',
    height:30,
    backgroundColor:'#FFFFFF',
    justifyContent:'space-between',
    alignSelf: 'stretch',
    marginTop:15
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
