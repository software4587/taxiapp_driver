import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Font} from 'expo';

export default class Welcome extends Component
{
  static navigationOptions = {
    header:null,
 };

 state = {
    fontLoaded: false,
};

async componentDidMount() {
      await Font.loadAsync({
          //'GothamLight': require('../../../assets/fonts/GothamLight.ttf'),
          'GothamBold': require('../../../assets/fonts/GothamBold.ttf'),
          'GothamBook': require('../../../assets/fonts/GothamBook.ttf'),
          'GothamBookItalic': require('../../../assets/fonts/GothamBookItalic.ttf'),
      });
      this.setState({fontLoaded: true});
  }


  render()
  {
    return (
      <ImageBackground source={require('../images/pulkit.jpg')}  style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={require('../images/app_logo.png')} style= {styles.logoStyle} />
      </View>


      <View style={styles.section1}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'#FFFFFF'}}>Welcome To</Text>
        <Text style={{fontSize:35,fontWeight:'bold',color:'#FFFFFF'}}>Taman Jurong! </Text>
        <Text style={{fontSize:20,color:'#FFFFFF'}}>Book your ride now and happy journey</Text>
      </View>

          {
              this.state.fontLoaded ? (
                  <View style={styles.section1}>

                      {/*started editing below to include custom fonts*/}
                    <Text style={{
                        fontFamily: 'GothamBookItalic',
                        fontSize: 30,
                        // fontWeight:'bold',
                        color: '#FFFFFF'

                    }}
                    >Welcome To </Text>
                    <Text style={{fontFamily: 'GothamBookItalic', fontSize: 35, color: '#FFFFFF'}}>Taman Jurong! </Text>
                    <Text style={{fontFamily: 'GothamBookItalic', fontSize: 20, color: '#FFFFFF'}}>Book your ride now and happy journey</Text>
                  </View>
              ) : null
          }



      <View style={styles.section2}>
      <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Signin')} style={{backgroundColor:'#FFFFFF', height:70, borderRadius:10,alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Get Started</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-around', marginTop:10, width:210, marginLeft:50}}>
        <View>
          <Text style={{color:'#be98db',fontSize:15}}>Ready to earn? </Text>
        </View>

        <View>
          <Text style={{color:'#FFFFFF',fontSize:15}}>Open Driver App</Text>
        </View>
        </View>
      </View>

     </ImageBackground>
  );
  }
}
const styles = StyleSheet.create({  
  container:{
    flex:1,
    //justifyContent:'center',
    //alignItems:'center',
    //width:'80%',
    //height:'100%',
  },
  logoStyle:{
    width:100,
    height:100
  },
  logoContainer:{
    flex:1,
    //width:100,
  //  height:100,
    marginTop:70,
    marginLeft:10,
    //backgroundColor:'green'
  },
  section1:{
    //flex:1,
    marginBottom:100,
    //marginTop:5,
    marginLeft:25,
    //backgroundColor:'green'
  },
  section2:{
    flex:1,
    marginBottom:80,
    marginLeft:25,
    marginRight:25,
    //backgroundColor:'green'
  }
});
