import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import {Font} from 'expo';

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
            'GothamBookItalic': require('../../../assets/fonts/GothamBookItalic.ttf'),
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

                            <Text style={{
                                fontSize: 30,
                                // fontWeight:'bold',
                                color: '#FFFFFF',
                                fontFamily: 'GothamBold',
                            }}>{"What's your number?"} </Text>

                            <Text style={{
                                fontSize: 15,
                                color: '#FFFFFF',
                                fontFamily: 'GothamBook'
                            }}>{"We'll text you code to verify your phone"}</Text>

                        </View>
                    ) : null
                }


                {
                    this.state.fontLoaded ? (
                        <View style={styles.loginFields}>
                    <View style={styles.SectionStyle}>
                        <Image source={require('../images/chinaMap.png')} style={styles.iconStyle}/>
                        <TextInput
                            style={{backgroundColor: '#FFFFFF', borderRadius: 10, height: 50, width: 200}}
                            placeholder='+65   Your Phone Number'
                            underlineColorAndroid='transparent'
                            textAlign='center'
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <Image source={require('../images/key.png')} style={styles.iconStyle}/>
                        <TextInput
                            style={{backgroundColor: '#FFFFFF', borderRadius: 10, height: 50, width: 200}}
                            placeholder='   Your Password'
                            underlineColorAndroid='transparent'
                            textAlign='left'

                        />
                    </View>
                    <View style={{marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'GothamBook', color: '#FFFFFF'}}>Forgot Your Password?</Text>
                    </View>
                </View>
                    ) : null
                }

                <View style={styles.section2}>
                    <TouchableOpacity style={{
                        backgroundColor: '#F3C143',
                        height: 50,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'GothamBold',fontSize: 20, fontWeight: 'bold'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    width: 260,
                    marginLeft: 60,
                    marginBottom: 20
                }}>
                    <View>
                        <Text onPress={() => this.props.navigation.navigate('CreateNewAccount')}
                              style={{color: '#be98db',fontFamily: 'GothamBook'}}>Not A Member? </Text>
                    </View>
                    <View>
                        <Text onPress={() => this.props.navigation.navigate('CreateNewAccount')}
                              style={{color: '#FFFFFF',fontFamily: 'GothamBook'}}>Create Account</Text>
                    </View>
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
        width: 100,
        height: 100,
        marginTop: 60,
        marginLeft: 10
    },
    section1: {
        flex: 1,
        marginTop: 25,
        marginLeft: 25,
        //backgroundColor:'green'
    },
    section2: {
        flex: 1,
        marginBottom: 60,
        marginLeft: 25,
        marginRight: 25
    },
    loginFields: {
        marginBottom: 30,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5
        //backgroundColor:'green'
    },
    iconStyle: {
        padding: 10,
        marginLeft: 15,
        height: 25,
        width: 25,
        alignItems: 'center'
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 40,
        borderRadius: 10,
        //margin: 10,
        shadowColor: '#555555',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderColor: '#dddddd',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        marginBottom: 10
    },
});
