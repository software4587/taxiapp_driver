import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../header';

export default class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
    drawerLabel: 'Any Query',
    drawerIcon: ({ tintColor }) => (
     <Image
       source={require('../images/search.png')}
       style={[styles.icon, {tintColor: '#ffffff'}]}
     />
   )
  };


  render() {
    const myButton = (
      <Icon name="arrow-left" size={20} color="#fff" onPress={() =>  this.props.navigation.toggleDrawer()} />
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
          <View style={{width: 300, marginTop:5, height: 50, padding: 10}} ><Header name="Any Query" /></View>
          </View>
      </LinearGradient>

      <View
          style={{ width: 375,height: 600 }}>
            <View style={styles.sec2}>
            <Icon name="user" size={20} style={styles.searchIcon}/>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.TextInputStyleClass}
                placeholder="Enter Your Name..."
                onChangeText={(text) => this.setState({text})}
              />
            </View>
            <View style={styles.sec2}>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.TextInputStyleClass}
                placeholder="Enter Your Email..."
                onChangeText={(text) => this.setState({text})}
              />
            </View>

            <View style={styles.sec2}>
              <TextInput
              underlineColorAndroid="transparent"
                style={styles.TextInputStyleClass}
              placeholder="Enter Your Query..."
                onChangeText={(text) => this.setState({text})}
              />
            </View>

            <View style={styles.sec3} >
              <TouchableOpacity style={styles.regbtn}>
                <Text style={{color: '#fff',fontSize: 20, paddingTop: 10}}>SEND!</Text>
              </TouchableOpacity>
          </View>
          </View>

      </View>
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
    flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderRadius:25,
        borderWidth: 0.5,
        borderColor: '#000',
},
icon:{
  width:24,
  height:24
},
searchIcon: {
    padding: 10,
}
});
