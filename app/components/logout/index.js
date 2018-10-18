import React, { Component }  from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
export class Logout extends Component
{
    render()
    {
      return(
        <TouchableOpacity>
        <View style={styles.item}>
        <View style={styles.iconContainer}>
        <Image source={require('./img/logout.png')} style={styles.icon}></Image>
        </View>
        <Text style={styles.label}>Logout</Text>
        </View>
        </TouchableOpacity>
      );
    }
}
