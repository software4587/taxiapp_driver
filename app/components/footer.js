import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Font} from 'expo';




export default class Footer extends Component {

  state = {
      fontLoaded: false,
  };

  async componentDidMount() {
      await Font.loadAsync({
          'GothamBold': require('./assets/fonts/GothamBold.ttf'),
          'GothamBook': require('./assets/fonts/GothamBook.ttf')
      });
      this.setState({fontLoaded: true});
  }

  render() {
      return (
        <View style={styles.sectionFooter}>
        <View style={{marginBottom:10, justifyContent:'center', alignItems:'center', flexDirection:'row'}}>

        <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:8}}>
        <Image source={require('./images/user_icon.png')} style= {styles.footerIconStyle} />
        <Text style={{marginRight:0,fontFamily: 'GothamBook',fontSize:10}} >My Profile</Text>
        </View>

        <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:8}}>
        <Image source={require('./images/file-bag.png')} style= {styles.footerIconStyle} />
        <Text style={{marginLeft:0,fontFamily: 'GothamBook',fontSize:10}} >Buy Credits</Text>
        </View>

        <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:8}}>
        <Image source={require('./images/app_logo.png')} style= {styles.footerIconStyle} />
        <Text style={{marginLeft:0,fontFamily: 'GothamBook',fontSize:10}} >Dashboard</Text>
        </View>

        <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:8}}>
        <Image source={require('./images/dollar.png')} style= {styles.footerIconStyle} />
        <Text style={{marginLeft:0,fontFamily: 'GothamBook',fontSize:10}} >My Balance</Text>
        </View>

        <View style={{justifyContent:'center', alignItems:'center', paddingHorizontal:8}}>
          <Image source={require('./images/gethelp.png')} style= {styles.footerIconStyle} />
          <Text style={{marginLeft:0,fontFamily: 'GothamBook',fontSize:10}}> Get Help</Text>
        </View>

        </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  sectionFooter:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf: 'stretch',
    marginTop:30,
    backgroundColor:'#FFFFFF',
    height:70,
    padding:10
  },
  section6Inner:{
    flexDirection:'row',
    height:30,
    backgroundColor:'#FFFFFF',
    justifyContent:'space-between',
    alignSelf: 'stretch',
    marginTop:10
  },
  footerIconStyle:{
    width:30,
    height:30,
    //marginLeft:10,
    //marginBottom:20
  },
});
