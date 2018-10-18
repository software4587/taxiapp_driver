import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList,Image,AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../header';
import axios from 'axios';

export default class Jobsearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "resultArray" : [],
      "text": ''
    }
  }

  /*componentDidMount()
  {
    this.setState({'loading':false})
  }*/

  async componentWillMount()
  {

    /*this.setState({
      loading: true
    });*/

    const jobs  = await AsyncStorage.getItem('inputData');
    if(jobs)
    {
        //console.warn(jobs);
    }
    else
    {
        //console.warn('else');
    }
    //const endURL = "https://gradechoice.com/api/jobportal/joblisting?skills="+jobs+"&location=705";
    const endURL = "https://gradechoice.com/api/jobportal/joblisting?skills="+jobs;
    //axios.get("https://gradechoice.com/api/jobportal/joblisting?skills=php,java&location=705")
    //console.warn(endURL);
    axios.get(endURL)
    .then(response => {
      //console.warn(response.data.data);
      //this.setState({loading: false}),
      this.setState({"resultArray":response.data.data});
    });
    //console.warn('willmount');
  }


  static navigationOptions = {
    drawerLabel: 'Search Job',
    header:null,
      title: 'Job Search',
     headerTitleStyle: { color: '#fff' },
    headerStyle: {
   backgroundColor: 'blue',
   headerRight: <Icon style={{ marginLeft:15,color:'#fff' }} name={'bars'} size={25} /> 
 },
    drawerIcon: ({ tintColor }) => (
     <Image
       source={require('../images/search.png')}
       style={[styles.icon, {tintColor: '#ffffff'}]}
     />
   )
  };

  renderItem = ({item}) => {
    return (
          <View style={{marginBottom:15,marginTop: 15}}>
          <Text style={styles.jobHeading}>{item.companyName}</Text>
          <Text style={styles.jobSubHeading}>{item.category}</Text>
          <Text>{item.address}</Text>
          <Text>{item.experience}</Text>
          <Text>{item.jobType}</Text>
          <Text>{item.skills}</Text>
          <Text style={styles.applyNow}>Apply Now</Text>
          </View>
    )
  }

  renderSeparator = () => {
    return (
      <View style={{height:1, width:'100%', backgroundColor:'gray'}}></View>
    )
  }

  jobDetails = () => {

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
          <View style={{width: 300, marginTop:5, height: 50, padding: 10}} ><Header name="Job Search" /></View>
          </View>
      </LinearGradient>

      <View>
      <View style={styles.sec2}>
        <TextInput
        underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          placeholder="android development jobs in hyderabad"
          onChangeText={(text) => this.setState({text})}
        />
        <View style={{justifyContent:'center', alignItems:'center',backgroundColor:'gray',width:80}}>
        <Image
          source={require('../images/filter.png')}
          style={styles.socialIcon}
        />
        </View>
      </View>
      </View>
      <View style={{ width: 350,height: 500}}>
      <FlatList
        data={this.state.resultArray}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        initialNumToRender='10'
      />

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
    flexDirection: 'row',
    width: 365,
    shadowColor: '#E91E63',
    shadowOffset: { width: 1, height: 4 },
    shadowRadius: 5,
    justifyContent:'space-around',
    borderWidth: 0.5,
    borderColor: 'gray',
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
  textAlign: 'left',
  width:280,
  height: 40,
  paddingHorizontal:16,
  fontSize:16,
  fontWeight:'500'
},

jobHeading:{
  fontWeight: 'bold',
  color: 'blue'
},

jobSubHeading:{
  color:'gray'
},
applyNow:{
  color:'orange',

},
icon:{
  width:24,
  height:24
},
socialIcon:{
  width:20 ,
  height:20
  //marginRight:12
}
/*shadow:{
  shadowOffset: { width:0, height: 2 },
  shadowColor: '#000',
  shadowOpacity: 0.2,
  elevation: 3,
  // background color must be set
  backgroundColor : "#F8F8F8" // invisible color
}*/

});
