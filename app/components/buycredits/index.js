import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header.js';
import Footer from '../footer.js';

import {Font} from 'expo';

export default class BuyCredits extends Component
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
      <Header name="BUY CREDITS" fontFamily="GothamBold"/>
              ) : null
          }

          {
              this.state.fontLoaded ? (
               <View style={styles.detailSection}>
                <Image source={require('../images/yellow.png')} style= {styles.dollarIconStyle} />
                  <View>
                    <Text style={{marginLeft:20, fontFamily: 'GothamBook'}}>100 Credits</Text>
                    <Text style={{marginLeft:20, fontFamily: 'GothamBook', color: '#888888'}}>Get 100 Credits in just $10</Text>
                  </View>
                  <View style={{marginLeft:50, borderWidth:1, backgroundColor:'#FFFFFF',width:45,borderRadius:2,borderColor:'#f2bc35',height:20}}>
                    <Text style={{ fontFamily:"GothamBold", color:'#f3c143',textAlign:'center'}}>GET</Text>
                  </View>
               </View>
              ) : null
          }


          {
              this.state.fontLoaded ? (
          <View style={styles.detailSection}>
              <Image source={require('../images/yellow.png')} style= {styles.dollarIconStyle} />
                <View>
                  <Text style={{marginLeft:20, fontFamily: 'GothamBook'}}>100 Credits</Text>
                  <Text style={{marginLeft:20, fontFamily: 'GothamBook', color: '#888888'}}>Get 100 Credits in just $10</Text>
                </View>
                <View style={{marginLeft:50, borderWidth:1, backgroundColor:'#FFFFFF',width:45,borderRadius:2,borderColor:'#f2bc35',height:20}}>
                  <Text style={{fontFamily:"GothamBold", color:'#f3c143',textAlign:'center'}}>GET</Text>
                </View>
          </View>
              ) : null
          }

          {
              this.state.fontLoaded ? (
          <View style={styles.detailSection}>
              <Image source={require('../images/yellow.png')} style= {styles.dollarIconStyle} />
                <View>
                  <Text style={{marginLeft:20, fontFamily: 'GothamBook'}}>100 Credits</Text>
                  <Text style={{marginLeft:20, fontFamily: 'GothamBook', color: '#888888'}}>Get 100 Credits in just $10</Text>
                </View>
                <View style={{marginLeft:50, borderWidth:1, backgroundColor:'#FFFFFF',width:45,borderRadius:2,borderColor:'#f2bc35',height:20}}>
                  <Text style={{fontFamily:"GothamBold", color:'#f3c143',textAlign:'center'}}>GET</Text>
                </View>
          </View>
              ) : null
          }

          {
              this.state.fontLoaded ? (
          <View style={styles.detailSection}>
              <Image source={require('../images/yellow.png')} style= {styles.dollarIconStyle} />
                <View>
                  <Text style={{marginLeft:20, fontFamily: 'GothamBook'}}>100 Credits</Text>
                  <Text style={{marginLeft:20, fontFamily: 'GothamBook', color: '#888888'}}>Get 100 Credits in just $10</Text>
                </View>
                <View style={{marginLeft:50, borderWidth:1, backgroundColor:'#FFFFFF',width:45,borderRadius:2,borderColor:'#f2bc35',height:20}}>
                  <Text style={{fontFamily:"GothamBold", color:'#f3c143',textAlign:'center'}}>GET</Text>
                </View>
          </View>
              ) : null
          }




          </View>
          <Footer navigation={this.props.navigation}/>
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
    marginBottom:5,
    padding:5
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
