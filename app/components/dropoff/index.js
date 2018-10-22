import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header.js';
import Footer from '../footer.js';
import {Font} from 'expo';

export default class Dropoff extends Component
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
      {
          this.state.fontLoaded ? (
              <Header name="DROP - OFF" fontFamily="GothamBold"/>
          ) : null
      }
      <View style={{flex:1}}>
          <View style={styles.detailSection}>
            <View style={{flexDirection:'row'}}>
              <Text style={{marginLeft:20,fontFamily:'GothamBold',fontSize:20}}>Scarlet Johnson</Text>

              <View style={{ marginLeft:20,backgroundColor:'#fccb32',width:50,
                alignItems:'center',justifyContent:'center',flexDirection:'row',borderRadius:25,height:14,marginTop:10}}>
              <Image source={require('../images/star_white.png')} style={{width:13,height:13}} />
              <Text style={{color:'#FFFFFF',fontFamily:'GothamBold',fontSize:10}}>4.7</Text>
              </View>
            </View>
              <Text style={{marginLeft:20,fontFamily:'GothamBook'}}>Booking ID: #212154</Text>
              <View style={{flexDirection:'row', paddingTop:10}}>
              <Text style={{marginLeft:20,fontFamily:'GothamBold',color:'#8c8c8c'}}>13.2km</Text>
              <Text style={{marginLeft:20,fontFamily:'GothamBold',color:'#f40000'}}>SGD 12.65</Text>
              </View>

              <View style={{flexDirection:'row',marginLeft:20,marginTop:5}}>

                <Image source={require('../images/redlight.png')} style= {styles.imageFooter} />

                <View style={{marginLeft:15}}>
                <Text style={{fontSize:10,fontFamily:'GothamBold',}}>PICKUP LOCATION</Text>
                <Text style={{fontFamily:'GothamBook',color:'#8c8c8c'}}>Eunos Road 8 #05-03 Singapore</Text>
                </View>
              </View>

              <View style={{flexDirection:'row',marginLeft:20,marginTop:5}}>

                <Image source={require('../images/green_icon.png')} style= {styles.imageFooter} />

                <View style={{marginLeft:15}}>
                <Text style={{fontSize:10,fontFamily:'GothamBold'}}>DROP-OFF LOCATION</Text>
                <Text style={{fontFamily:'GothamBook',color:'#8c8c8c'}}>Eunos Road 8 #05-03 Singapore</Text>
                </View>
              </View>
              <View style={{flexDirection:'row', alignItems:'center', paddingTop:15}}>
              <TouchableOpacity style={{backgroundColor:'#1fd177', height:35, width:300, borderRadius:10,alignItems:'center', justifyContent:'center'}}>
                 <Text style={{fontSize:10,fontFamily:'GothamBold',color:'#FFFFFF'}}>DROP OFF</Text>
             </TouchableOpacity>
              </View>
          </View>

          <View style={styles.talkSection}>
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../images/ring_icon.png')} style= {styles.iconTalk} />
            <Text style={{fontFamily:'GothamBold'}}>Call</Text>
            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../images/inbox.png')} style= {styles.iconTalk} />
            <Text style={{fontFamily:'GothamBold'}}>Chat</Text>
            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('../images/cross.png')} style= {styles.iconTalk} />
            <Text style={{fontFamily:'GothamBold'}}>Cancel</Text>
            </View>
          </View>



          </View>
          <Footer />
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
    marginTop:20,
    justifyContent:'center',
    alignItems:'center'
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
