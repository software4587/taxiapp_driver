import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, AsyncStorage, KeyboardAvoidingView } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../header';
import axios from 'axios';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      'username': '',
      'email': '',
      'password': '',
      'password': '',
      'role': ''
    };
  }

  static navigationOptions = {
    drawerLabel: 'Register',
    header:null,
    drawerIcon: ({ tintColor }) => (
     <Image
       source={require('../images/male.png')}
       style={[styles.icon, {tintColor: '#ffffff'}]}
     />
   )
  };

  renderButton() {
    /*if(this.state.loading) { 
      return <Spinner size="small" />
    }*/

    return (
      <TouchableOpacity style={styles.regbtn} onPress={this.registration}>
        <Text style={{color: '#fff',fontSize: 20, paddingTop: 10}}>CREATE AN ACCOUNT</Text>
      </TouchableOpacity>
      );
  };

  registration = async () => {
    //rajmandersinghmatharu@gmail.com
    this.setState({"error": "", loading: true});
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const cpassword = this.state.cpassword;
    const mobile = this.state.mobile;
    const role = 'is_candidate';

    console.warn(password +" === "+ cpassword);

    if(password === cpassword)
    {
      const regURL = "https://gradechoice.com/api/auth/register";
      await  axios.post(regURL,
        {
          'username': username,
          'email': email,
          'password': password,
          'mobile': mobile,
          'role': role
        }
        ).then(response => {
          //console.warn(response.data);
          /*console.warn(response.data.message);*/
          /*** 200 for success ***/
          if(response.data.status === 200)
          {
            //this.setState({"resultArray": response.data.data});
            this.props.navigation.navigate('MyModal1');
            AsyncStorage.setItem('token',response.data.data.token);
            AsyncStorage.setItem('userid',response.data.data.userid);
            //navigate('OtpVerify');
            //console.warn("token = "+response.data.data.token);
            //console.warn("uid = "+response.data.data.userid);

          }
          else
          {
            //console.warn("error");
            this.setState({"error": "Authentication faild"});
            //this.props.navigation.navigate('MyModal1');
          }
      });
    }
    else
    {
      console.warn("Password and Confirm password not matched");
    }
  }

  render() {
    const myButton = (
      <Icon name="arrow-left" size={20} color="#fff" onPress={() =>  this.props.navigation.navigate('Home')} />
    );
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View style={styles.container}>
      <LinearGradient
          colors={['#75b3e5','#b96dc4']}
          start={[0.0, 0.8]}
          end={[1.0, 0.5]}
          style={{ width: 375,height: 70 }}>

          <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{marginLeft:20, marginTop:25, width: 40, height: 50, padding: 10}}>{ myButton }</View>
          <View style={{width: 300, marginTop:5, height: 50, padding: 10}} ><Header name="Register" /></View>
          </View>
      </LinearGradient>

          <View style={{ width: 375,height: 600 }}>

            <View style={styles.sec2}>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.TextInputStyleClass}
                placeholder="Your Name"
                onChangeText={(username) => this.setState({username})}
              />
            </View>

            <View style={styles.sec2}>
              <TextInput
              underlineColorAndroid="transparent"
                style={styles.TextInputStyleClass}
                placeholder="Your Email..."
                onChangeText={(email) => this.setState({email})}
              />
            </View>

            <View style={styles.sec2}>
              <TextInput
              underlineColorAndroid="transparent"
                style={styles.TextInputStyleClass}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
              />
            </View>


            <View style={styles.sec2}>
              <TextInput
              underlineColorAndroid="transparent"
                style={styles.TextInputStyleClass}
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={(cpassword) => this.setState({cpassword})}
              />
            </View>

            <View style={styles.sec2}>
              <TextInput
              underlineColorAndroid="transparent"
                style={styles.TextInputStyleClass}
                placeholder="Mobile"
                onChangeText={(mobile) => this.setState({mobile})}
              />
            </View>

            <View style={styles.sec3} >
              {this.renderButton()}
            </View>
          </View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  heading:{
    marginTop: 50
  },
  sec2:{
    width: 350,
    marginTop: 40,
    marginLeft: 10
  },
  sec3:{
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 200
  },
  regbtn:{
    width: 350,
    height: 50,
    backgroundColor: '#fe7b3a',
    alignItems: 'center',
    borderRadius:25
  },

  TextInputStyleClass:{

// Setting up Hint Align center.
textAlign: 'left',
padding: 10,
// Setting up TextInput height as 50 pixel.
height: 40,
// Set border width.
 borderWidth: 0.5,

 // Set border Hex Color Code Here.
 borderColor: '#D3D3D3',



// Set border Radius.
 borderRadius: 25 ,

//Set background color of Text Input.
 //backgroundColor : "#FFFFFF",
},
icon:{
  width:24,
  height:24
}
});
