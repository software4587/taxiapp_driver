import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Header from '../header.js';
import Footer from '../footer.js';
import {Font} from 'expo';

export default class MyCredits extends Component
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
      <Header name="MY CREDITS" fontFamily="GothamBold"/>
      <View style={{flex:1}}>
          <View style={styles.withdrawSection}>
            <Text style={{fontSize:35,fontFamily:"GothamBook"}}>1,258</Text>
            <Text style={{fontWeight:'bold',fontFamily:"GothamBook"}}>Total Available Credit</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pickup')} style={{backgroundColor:'#F3C143', height:30,
            width: 170, borderRadius:10,alignItems:'center', justifyContent:'center',marginTop:5}}>
              <Text style={{fontSize:15,fontFamily:"GothamBold"}}>BUY CREDITS</Text>    
            </TouchableOpacity>
          </View>

          <View style={styles.historyTitle}>
            <Text style={{fontSize:10,fontWeight:'bold', marginLeft:10,fontFamily:"GothamBold"}}>CREDIT HISTORY</Text>
          </View>

          <View style={styles.detailSection}>
              <Text style={{fontWeight:'bold',fontSize:40,color:'#d8d8d8',fontFamily:"GothamBold"}}>1</Text>
              <View>
              <Text style={{marginLeft:20,fontFamily:"GothamBook"}}>Credits added</Text>
              <Text style={{marginLeft:20, color:'gray',fontSize:10,fontFamily:"GothamBook"}}>DATE: 12 Aug, 2018</Text>
              </View>
              <Text style={{marginLeft:150,fontWeight:'bold',color:'green',fontFamily:"GothamBold"}}>$2.50</Text>
          </View>

          <View style={styles.detailSection}>
              <Text style={{fontWeight:'bold',fontSize:40,color:'#d8d8d8',fontFamily:"GothamBold"}}>2</Text>
              <View>
              <Text style={{marginLeft:20,fontFamily:"GothamBook"}}>Credits added</Text>
              <Text style={{marginLeft:20, color:'gray',fontSize:10,fontFamily:"GothamBook"}}>DATE: 12 Aug, 2018</Text>
              </View>
              <Text style={{marginLeft:150,fontWeight:'bold',color:'green',fontFamily:"GothamBold"}}>$2.50</Text>
          </View>

          <View style={styles.detailSection}>
              <Text style={{fontWeight:'bold',fontSize:40,color:'#d8d8d8',fontFamily:"GothamBold"}}>3</Text>
              <View>
              <Text style={{marginLeft:20,fontFamily:"GothamBook"}}>Credits added</Text>
              <Text style={{marginLeft:20, color:'gray',fontSize:10,fontFamily:"GothamBook"}}>DATE: 12 Aug, 2018</Text>
              </View>
              <Text style={{marginLeft:150,fontWeight:'bold',color:'green',fontFamily:"GothamBold"}}>$2.50</Text>
          </View>

          <View style={styles.detailSection}>
              <Text style={{fontWeight:'bold',fontSize:40,color:'#d8d8d8',fontFamily:"GothamBold"}}>4</Text>
              <View>
              <Text style={{marginLeft:20,fontFamily:"GothamBook"}}>Credits added</Text>
              <Text style={{marginLeft:20, color:'gray',fontSize:10,fontFamily:"GothamBook"}}>DATE: 12 Aug, 2018</Text>
              </View>
              <Text style={{marginLeft:150,fontWeight:'bold',color:'green',fontFamily:"GothamBold"}}>$2.50</Text>
          </View>

          <View style={styles.detailSection}>
              <Text style={{fontWeight:'bold',fontSize:40,color:'#d8d8d8',fontFamily:"GothamBold"}}>5</Text>
              <View>
              <Text style={{marginLeft:20,fontFamily:"GothamBook"}}>Credits added</Text>
              <Text style={{marginLeft:20, color:'gray',fontSize:10,fontFamily:"GothamBook"}}>DATE: 12 Aug, 2018</Text>
              </View>
              <Text style={{marginLeft:150,fontWeight:'bold',color:'green',fontFamily:"GothamBold"}}>$2.50</Text>
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
  withdrawSection:{
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    marginTop:4,
    alignSelf: 'stretch',
    height:110
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
    height:50,
    backgroundColor:'#FFFFFF',
    marginBottom:5
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
    marginTop:60,
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
