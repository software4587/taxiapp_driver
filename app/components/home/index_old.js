import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView, ScrollView, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Jobsearch from '../jobsearch';
//import GradientHeader from '../gradientheader';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  /*const GradientHeader = (props) => (
  <View style={{ backgroundColor: '#eee' }}>
    <LinearGradient
      colors={['#75b3e5','#b96dc4']}
      start={[0.0, 0.5]}
      end={[1.0, 0.5]}
      style={[StyleSheet.absoluteFill, { height: Header.HEIGHT }]}
    >
      <Header {...props} />
    </LinearGradient>
  </View>
);*/



  static navigationOptions = {
    drawerLabel: 'Home',
    header:null,
    drawerIcon: ({ tintColor }) => (
    <Image
      source={require('../images/home.png')}
      style={[styles.icon, {tintColor: '#ffffff'}]}
    />
    )
  };

 testMe = () => {
   const te  = this.state.text;
   AsyncStorage.setItem('inputData',te);
   this.props.navigation.navigate('Job Search');
 }

 /*displayData = async () => {
   try{
     let user  = await AsyncStorage.getItem('inputData');
     alert(user);
   }catch(error){
    alert(error)
   }
 }*/

    //const imageWidth = Dimensions.get('window').width / 2;

  render() {
    const listIcon = (
      <Icon name="list" size={22} style={{marginTop: 35, marginLeft: 20 }} color="#fff" onPress={() =>  this.props.navigation.toggleDrawer()} />
    );

    const myIcon = (
      //<Icon name="search" size={15} style={{marginTop: 2}} color="#fff" onPress={() =>  this.props.navigation.toggleDrawer()} />
      <Icon name="search" size={15} style={{marginTop: 2}} color="#fff" onPress={this.testMe} />
    );

    const googleIcon = (
      <Icon name="google-plus-circle" size={20} style={{marginTop: 16}} color="#DB4437"/>
    );

    const facebookIcon = (
      <Icon name="facebook-square" size={20} style={{marginTop: 16}} color="#3B5998"/>
    );
      return (

          <View style={styles.container}>
          <LinearGradient
            colors={['#75b3e5','#b96dc4']}
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            style={{ width: 375, height:900}}>

            <View>
              { listIcon }
            </View>

            <View style={styles.heading}>

            <Image
              source={require('../images/logo.png')}
              style={styles.stretch}
            />
            </View>

            <KeyboardAvoidingView behavior="position" enabled>
            <View style={styles.SectionStyle}>

              <TextInput
                underlineColorAndroid="transparent"
                style={{height: 40,borderColor: '#fff', borderBottomColor:'#ffffff', color: "#FFFFFF",
                fontWeight: 'bold',flex: 1}}
                placeholder=" Search"
                onChangeText={text => this.setState({text})}
              />
              { myIcon }
              </View>
              </KeyboardAvoidingView>

              <View style={styles.sec3} >
                <TouchableOpacity  style={styles.regbtn} onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={{color: '#fff',fontWeight: 'bold',fontSize: 13, paddingTop: 5}}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginbtn} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={{color: '#fe7b3a',fontWeight: 'bold',fontSize: 13, paddingTop: 5}}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sec4} >
            <Text style={{color: '#fff',fontWeight: 'bold',fontSize: 15}}>Continue using</Text>
            </View>
            <View style={styles.sec5} >
              <TouchableOpacity  style={styles.googlebtn} onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={{textAlign: 'center',color: '#fff',width: 150,fontWeight: 'bold',fontSize: 13, padding: 5, borderWidth: 1, borderColor: '#fff'}}>
                 { googleIcon }  GOOGLE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.facebookbtn} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{textAlign: 'center',color: '#fff',width: 150,fontWeight: 'bold',fontSize: 13, padding: 5,  borderWidth: 1, borderColor: '#fff'}}>
                  { facebookIcon }  FACEBOOK
                </Text>
              </TouchableOpacity>
              </View>

          </LinearGradient>


          </View>

    //  </Content>
    //  </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center'
  },
  stretch: {
   width: 190,
   height: 110
 },
 ImageStyle: {
     padding: 20,
     margin: 5,
     height: 55,
     width: 55,
     color: '#fe7b3a',
     alignItems: 'flex-end',
     marginLeft: 30
 },
  heading:{
    marginTop: 100,
    alignItems: 'center',
      width: 355
  },
  sec3:{
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop:40,
    marginBottom: 0
  },
  sec4:{
    marginTop:40,
    alignItems: 'center'
  },
  sec5:{
    //marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //width:355
  },
  regbtn:{
    width: 150,
    height: 30,
    backgroundColor: '#fe7b3a',
    alignItems: 'center'
  },
  loginbtn:{
    width: 150,
    height: 30,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  googlebtn:{
    width: 150,
    height: 70,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center'
  },
  facebookbtn:{
    width: 150,
    height: 70,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 20
  },
  icon:{
    width:24,
    height:24
  },
  sec2:{
    width: 360,
    marginTop: 40,
    marginLeft: 9,
    padding: 10,
    flexDirection: 'row',

  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'orange',
    borderWidth: 1.5,
    borderColor: '#D3D3D3',
    height: 40,
    //borderRadius: 25 ,
    //top: 30,
    marginLeft: 19,
    width: 338,
    marginTop: 40,
    padding:10
  },
});
//export default Home;
