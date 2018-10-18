import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity,Image,AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../header';
import axios from 'axios';

export default class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      error:'',
      loading:'',
      password:'',
      cpassword:''
    }
  }

  static navigationOptions = {
		drawerLabel: 'ChangePassword',
    header:null,
    drawerIcon: ({ tintColor }) => (
     <Image
       source={require('../images/male.png')}
       style={[styles.icon, {tintColor: '#ffffff'}]}
     />
   )
 };


 changePassword = async () => {
   //rajmandersinghmatharu@gmail.com
   this.setState({"error": "", loading: true});
   const password = this.state.password;
   const cpassword = this.state.cpassword;


   console.warn(password +" === "+ cpassword);

   if(password === cpassword)
   {
     const regURL = "https://gradechoice.com/api/auth/changepassword";
     await  axios.post(regURL, 
       {
         'userid': 218,
         'newpassword':this.state.password
       }
       ).then(response => {
         console.warn(response.data);
         /*console.warn(response.data.message);*/
         /*** 200 for success ***/
         if(response.data.status === 200)
         {
           console.warn(response.data.data);
           //this.setState({"resultArray": response.data.data});

         }
         else
         {
           console.warn("error");
           this.setState({"error": "Authentication faild"});
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
      <View style={styles.container}>
      <LinearGradient
          colors={['#75b3e5','#b96dc4']}
          start={[0.0, 0.8]}
          end={[1.0, 0.5]}
          style={{ width: 375,height: 70 }}>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{marginLeft:20, marginTop:25, width: 40, height: 50, padding: 10}}>{ myButton }</View>
            <View style={{width: 300, marginTop:5, height: 50, padding: 10}} ><Header name="ChangePassword" /></View>
          </View>
      </LinearGradient>
        <View style={{ width: 375,height: 600}}>
        <View style={styles.sec2}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
            placeholder="New Password"
            onChangeText={(password) => this.setState({password})}
          />
        </View>

        <View style={styles.sec2}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
            placeholder="Confirm Password"
            onChangeText={(cpassword) => this.setState({cpassword})}
          />
        </View>


        <View style={styles.sec3} >
          <TouchableOpacity style={styles.regbtn} onPress={this.changePassword}>
            <Text style={{color: '#fff',fontWeight: 'bold',fontSize: 15, paddingTop: 5}}>ChangePassword</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  alignItems:'center'
  },
  heading:{
    marginTop: 50
  },
  sec2:{
    width: 350,
    marginTop: 40,
    marginLeft: 10,
    shadowColor: '#E91E63',
           shadowOffset: { width: 1, height: 4 },
           shadowRadius: 5
  //  shadowOffset: { width:10, height: 20},
  //  shadowColor: 'black',
    //shadowOpacity: 50,
  //  elevation: 40
    // background color must be set
     //backgroundColor : "gray" // invisible color
  },
  sec3:{
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 200
  },
  regbtn:{
    width: 350,
    height: 40,
    backgroundColor: '#fe7b3a',
    alignItems: 'center',
    borderRadius:25,
    padding:5
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
 borderRadius: 25
},
icon:{
  width:24,
  height:24
}
});
