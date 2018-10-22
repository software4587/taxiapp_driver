import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Font} from 'expo';
// import CustomFont from './../customFont/customFont';

export default class Welcome extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'GothamBold': require('../../../assets/fonts/GothamBold.ttf'),
            'GothamBook': require('../../../assets/fonts/GothamBook.ttf'),

        });
        this.setState({fontLoaded: true});
    }


    render() {
        return (
            <ImageBackground source={require('../images/pulkit.jpg')} style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../images/app_logo.png')} style={styles.logoStyle}/>
                </View>

                {
                    this.state.fontLoaded ? (
                        <View style={styles.section1}>

                            {/*started editing below to include custom fonts*/}
                            <Text style={{
                                fontFamily: 'GothamBold',
                                fontSize: 30,
                                // fontWeight:'bold',
                                color: '#FFFFFF'

                            }}
                            >Welcome To </Text>
                            <Text style={{fontFamily: 'GothamBold', fontSize: 35, color: '#FFFFFF'}}>Taman
                                Jurong! </Text>
                            <Text style={{fontFamily: 'GothamBook', fontSize: 15, color: '#FFFFFF'}}>Book your ride now
                                and happy journey</Text>
                        </View>
                    ) : null
                }


                <View style={styles.section2}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signin')} style={{
                        backgroundColor: '#FFFFFF',
                        height: 55,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {
                            this.state.fontLoaded ? (
                                <Text style={{fontFamily: 'GothamBold', fontSize: 20}}>Get Started</Text>
                            ) : null
                        }
                    </TouchableOpacity>
                    {
                        this.state.fontLoaded ? (
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        marginTop: 15, 
                        width: 250,
                        marginLeft: 35,
                    }}>
                        <View>
                            <Text style={{fontFamily: 'GothamBook', color: '#be98db', fontSize: 15}}>Ready to earn?</Text>
                            {/*<Text style={{fontFamily: 'GothamBook', color: '#FFFFFF', fontSize: 15}}>Open Driver App</Text>*/}

                        </View>
                        <View>
                            <Text style={{fontFamily: 'GothamBook', color: '#FFFFFF', fontSize: 15}}>Open Driver App</Text>
                        </View>
                    </View>
                        ) : null
                    }
                </View>


            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent:'center',
        //alignItems:'center',
        //width:'80%',
        //height:'100%',
    },
    logoStyle: {
        width: 100,
        height: 100
    },
    logoContainer: {
        flex: 1,
        //width:100,
        //  height:100,
        marginTop: 70,
        marginLeft: 10,
        //backgroundColor:'green'
    },
    section1: {
        //flex:1,
        marginBottom: 100,
        //marginTop:5,
        marginLeft: 25,
        //backgroundColor:'green'
    },
    section2: {
        flex: 1,
        marginBottom: 80,
        marginLeft: 25,
        marginRight: 25,
        //backgroundColor:'green'
    }
});
