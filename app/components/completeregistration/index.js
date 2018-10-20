import React, { Component } from 'react';
import { ScrollView, View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header.js';
import {Font} from 'expo';

export default class CompleteRegistration extends Component
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
      <ImageBackground source={require('../images/regbackground.jpg')}  style={styles.container}>

          {
              this.state.fontLoaded ? (
        <Header name="COMPLETE SIGNUP" fontFamily="GothamBold" />
              ) : null
          }
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={require('../images/app_logo.png')} style= {styles.logoStyle} />
        </View>
          {
              this.state.fontLoaded ? (
                <View style={styles.section1}>
                  <Text style={{fontSize:22,fontFamily: 'GothamBold',color:'#FFFFFF'}}>Complete Registration </Text>
                  <Text style={{fontSize:15, fontFamily: 'GothamBook', color:'#FFFFFF'}}>Please complete your registration here</Text>
                </View>
                      ) : null
          }

        <View style={styles.regContainer}>
        <View style={styles.loginFields}>
          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Select Car Brand'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>
          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Select Car Model'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Car Licence Number'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Account Name'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Account Number'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='Bank Name'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>

          <View style={styles.SectionStyle}>
          <TextInput
          placeholder='IFSC CODE'
          underlineColorAndroid='transparent'
          style={styles.input}
          />
          </View>
        </View>
        <View style={styles.section2}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyProfile')}style={{backgroundColor:'#F3C143', height:45, borderRadius:10,alignItems:'center', justifyContent:'center'}}>
            {
                this.state.fontLoaded ? (
            <Text style={{fontSize:20,fontFamily: 'GothamBold'}}>COMPLETE SIGNUP</Text>
                ) : null
            }
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
     </ImageBackground>
  );
  }
}
const styles = StyleSheet.create({
  regContainer:{
    backgroundColor:'#FFFFFF',
    width:280,
    height:400,
    justifyContent:'space-around',
    borderRadius:10,
    marginLeft:40,
    marginBottom:10,
    marginTop:5


  },
  container:{
    flex:1,
    //justifyContent:'center',
    //alignItems:'center',
    //width:'80%',
    //height:'100%',
  },
  logoStyle:{
    width:80,
    height:80
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
    marginBottom:5,
    marginTop:35,
    marginLeft:45,
    //backgroundColor:'green'
  },
  section2:{
    marginBottom:35,
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
    marginBottom:5,
    paddingHorizontal:10

},
input: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#424242',
    width:300
},
});
