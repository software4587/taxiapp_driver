import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, CheckBox,Image } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../header';


export default class JobFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  static navigationOptions = {
    drawerLabel: 'Job Filter',
    header:null,
    drawerIcon: ({ tintColor }) => (
     <Image
       source={require('../images/search.png')}
       style={[styles.icon, {tintColor: '#ffffff'}]}
     />
   )
  };

  checkBoxTest() {
    this.setState({
      checkStatus:!this.state.checkStatus
    })
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
          <View style={{width: 300, marginTop:5, height: 50, padding: 10}} ><Header name="Filter By" /></View>
          </View> 
      </LinearGradient>

      <View>
      </View>

      <View style={{ width: 375,height: 600}}>

      <View style={{borderWidth: 1, borderColor: 'gray',marginTop: 10}}>
      <View style={{ flexDirection: 'row' , justifyContent: 'space-around'}}>
        <Text>Job Type</Text>
        <Text>+</Text>
      </View>
      </View>

      <View style={{borderWidth: 1, borderColor: 'gray',marginTop: 10}}>
      <View style={{ flexDirection: 'row' , justifyContent: 'space-around'}}>
        <Text>Job Type</Text>
        <Text>+</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <CheckBox
          value={this.state.checked}
          onValueChange={() => this.setState({ checked: !this.state.checked })}
        />
        <Text style={{marginTop: 5}}>Full Time</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <CheckBox
          value={this.state.checked}
          onValueChange={() => this.setState({ checked: !this.state.checked })}
        />
        <Text style={{marginTop: 5}}>Part Time</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <CheckBox
          value={this.state.checked}
          onValueChange={() => this.setState({ checked: !this.state.checked })}
        />
        <Text style={{marginTop: 5}}>Internship</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <CheckBox
          value={this.state.checked}
          onValueChange={() => this.setState({ checked: !this.state.checked })}
        />
        <Text style={{marginTop: 5}}>Freelancer</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <CheckBox
          value={this.state.checked}
          onValueChange={() => this.setState({ checked: !this.state.checked })}
        />
        <Text style={{marginTop: 5}}> Contract Base</Text>
      </View>
      </View>


            <View style={{borderWidth: 1, borderColor: 'gray',marginTop: 10}}>
            <View style={{ flexDirection: 'row' , justifyContent: 'space-around'}}>
              <Text>Designation</Text>
              <Text>+</Text>
            </View>
            </View>

            <View style={{borderWidth: 1, borderColor: 'gray',marginTop: 10}}>
            <View style={{ flexDirection: 'row' , justifyContent: 'space-around'}}>
              <Text>Experience</Text>
              <Text>+</Text>
            </View>
            </View>


            <View style={{borderWidth: 1, borderColor: 'gray',marginTop: 10}}>
            <View style={{ flexDirection: 'row' , justifyContent: 'space-around'}}>
              <Text>Qualification</Text>
              <Text>+</Text>
            </View>
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
    width: 150,
    height: 40,
    backgroundColor: '#fe7b3a',
    alignItems: 'center',
    borderRadius: 20,
    padding:5
  },

  TextInputStyleClass:{
// Setting up Hint Align center.
textAlign: 'left',
height: 40,
 borderColor: '#D3D3D3',
},
icon:{
  width:24,
  height:24
}
});
