import React from 'react';
import { Text, View, Image } from 'react-native';


const Header = (props) => {
  const { textStyle } = styles;
    return(
    <View style={styles.headerStyle}>
      <View style={{flexDirection:'row'}}>
      <View style={{marginLeft:15}}>
      <Image source={require('./images/backarrow.png')} style= {styles.iconStyle} />
      </View>
          { props.fontFamily? <Text style={{
              fontSize:18,
              color:'#FFFFFF',
              fontFamily: 'GothamBold',
          }}>{props.name}</Text>: <Text style={{
              fontSize:20,
              color:'#FFFFFF',
          }}>{props.name}</Text>}
      </View>
    </View>
  )
};

const styles = {
  iconStyle:{
    width:30,
    height:30
  },
  textStyle: {
    fontSize:20,
    color:'#FFFFFF',
    textAlign:'center',
    marginLeft:90,
  },
  headerStyle:{
    backgroundColor:'#c72d33',
    alignSelf: 'stretch',
    height:70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    paddingTop:20  
  }
}

export default Header;
