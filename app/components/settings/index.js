import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header';
import Footer from '../footer.js';
import {Font} from 'expo';

export default class Settings extends Component
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
              <Header name="SETTINGS" fontFamily="GothamBold"/>
          ) : null
      }
          <View style={styles.section1}>

          <View style={styles.section1Inner}>
              <Image source={require('../images/bell_gray.png')} style= {styles.greenIconStyle} />
              <Text style={{marginLeft:20,fontFamily:'GothamBook'}}>Notification</Text>
          </View>

          <View style={styles.section1Inner}>
              <Image source={require('../images/star.png')} style= {styles.greenIconStyle} />
              <Text style={{marginLeft:20,fontFamily:'GothamBook'}}>Privacy Policy</Text>
          </View>

          <View style={styles.section1Inner}>
              <Image source={require('../images/star.png')} style= {styles.greenIconStyle} />
              <Text style={{marginLeft:20,fontFamily:'GothamBook'}}>Terms And Conditions</Text>
          </View>

          <View style={styles.section1Inner}>
              <Image source={require('../images/star.png')} style= {styles.greenIconStyle} />
              <Text style={{marginLeft:20,fontFamily:'GothamBook'}}>FAQs</Text>
          </View>

          </View>
          <Footer />
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
    flex:1,
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
    //flexDirection:'row',
    //marginTop:10,
    alignSelf: 'stretch',
    height:150,
    marginTop:190,
    backgroundColor:'#FFFFFF',
    //justifyContent:'space-around'
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
