import React, {Component} from 'react';
import {
    View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, TextInput,
    TouchableHighlight
} from 'react-native';
import Header from '../header.js';
import Footer from '../footer.js';
import {Font} from 'expo';

export default class Dashboard extends Component {
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
            'GothamUltraItalic': require('../../../assets/fonts/Gotham-UltraItalic.otf'),
        });
        this.setState({fontLoaded: true});
    }


    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.fontLoaded ? (
                        <Header name="DASHBOARD" fontFamily="GothamBold"/>
                    ) : null
                }

                {
                    this.state.fontLoaded ? (
                        <View style={{flex: 1}}>
                            <View style={styles.withdrawSection}>
                                <Image source={require('../images/man01.png')} style={styles.avatarImage}/>
                                <View style={{paddingLeft: 35}}>
                                    <Text style={{fontWeight: 'bold', fontFamily: 'GothamBold'}}>John Doe</Text>
                                    <Text style={{fontFamily: 'GothamBook'}}>Mercedes CLA</Text>
                                    <Text style={{fontFamily: 'GothamBook'}}>SGP 138hu</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Image source={require('../images/star_yellow.png')} style={styles.startStyle}/>
                                        <Text style={{fontFamily: 'GothamBook'}}>4.8</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={styles.detailSection}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginLeft: 20, fontFamily: 'GothamBold', fontSize: 15}}>Scarlet
                                        Johnson</Text>

                                    <View style={{
                                        marginLeft: 20,
                                        backgroundColor: '#fccb32',
                                        width: 50,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        borderRadius: 5
                                    }}>
                                        <Image source={require('../images/star_white.png')} style={styles.imageFooter}/>
                                        <Text style={{fontFamily: 'GothamBold', color: '#FFFFFF'}}>4.7</Text>
                                    </View>
                                </View>
                                <Text style={{marginLeft: 20, fontFamily: 'GothamBook'}}>Booking ID: #212154</Text>
                                <View style={{flexDirection: 'row', paddingTop: 10}}>
                                    <Text style={{
                                        marginLeft: 20,
                                        fontFamily: 'GothamBold',
                                        color: '#8c8c8c'
                                    }}>13.2km</Text>
                                    <Text style={{marginLeft: 20, fontFamily: 'GothamBold', color: '#f40000'}}>SGD
                                        12.65</Text>
                                </View>

                                <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>

                                    <Image source={require('../images/redlight.png')} style={styles.imageFooter}/>

                                    <View style={{marginLeft: 15}}>
                                        <Text style={{fontSize: 10, fontFamily: 'GothamBold'}}>PICKUP LOCATION</Text>
                                        <Text style={{fontFamily: 'GothamBook'}}>Eunos Road 8 #05-03 Singapore</Text>
                                    </View>
                                </View>

                                <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>

                                    <Image source={require('../images/green_icon.png')} style={styles.imageFooter}/>

                                    <View style={{marginLeft: 15}}>
                                        <Text style={{fontSize: 10, fontFamily: 'GothamBold'}}>DROP-OFF LOCATION</Text>
                                        <Text style={{fontFamily: 'GothamBook'}}>Eunos Road 8 #05-03 Singapore</Text>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    paddingTop: 15
                                }}>

                                    <View style={{
                                        backgroundColor: '#f4f0f0',
                                        width: 146,
                                        marginLeft: 10,
                                        padding: 2,
                                        borderColor: '#f4f0f0',
                                        borderWidth: 1,
                                        borderRadius: 10
                                    }}>
                                        <TouchableOpacity style={{
                                            backgroundColor: 'red',
                                            padding: 20,
                                            height: 35,
                                            width: 140,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={{color: '#FFFFFF'}}>
                                                REJECT
                                            </Text>
                                        </TouchableOpacity>
                                    </View>


                                    <View style={{
                                        backgroundColor: '#f4f0f0',
                                        width: 146,
                                        marginLeft: 1,
                                        padding: 2,
                                        borderColor: '#f4f0f0',
                                        borderWidth: 1,
                                        borderRadius: 10
                                    }}>
                                        <TouchableOpacity style={{
                                            backgroundColor: 'green',
                                            padding: 20,
                                            height: 35,
                                            width: 140,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={{color: '#FFFFFF'}}>
                                                ACCEPT
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>


                            <View style={styles.paymentSections}>
                                <View>
                                    <Text style={{color: 'gray', fontFamily: 'GothamBook'}}>My Credits</Text>
                                    <Text style={{color: 'blue', fontFamily: 'GothamBook'}}>Total Available
                                        Credits</Text>
                                </View>
                                <Text style={{
                                    color: 'gray',
                                    paddingLeft: 130,
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    paddingTop: 5,
                                    fontFamily: 'GothamBook'
                                }}>1,254</Text>
                            </View>

                            <View style={styles.paymentSections}>
                                <View>
                                    <Text style={{color: 'gray', fontFamily: 'GothamBook'}}>My Credits</Text>
                                    <Text style={{color: 'blue', fontFamily: 'GothamBook'}}>Total Available
                                        Credits</Text>
                                </View>
                                <Text style={{
                                    color: 'gray',
                                    paddingLeft: 130,
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    paddingTop: 5,
                                    fontFamily: 'GothamBook'
                                }}>1,254</Text>
                            </View>

                            <View style={styles.paymentSections}>
                                <View>
                                    <Text style={{color: 'gray', fontFamily: 'GothamBook'}}>My Credits</Text>
                                    <Text style={{color: 'blue', fontFamily: 'GothamBook'}}>Total Available
                                        Credits</Text>
                                </View>
                                <Text style={{
                                    color: 'gray',
                                    paddingLeft: 130,
                                    fontWeight: 'bold',
                                    fontSize: 14,
                                    paddingTop: 5,
                                    fontFamily: 'GothamBook'
                                }}>1,254</Text>
                            </View>


                        </View>
                    ) : null
                }

                {
                    this.state.fontLoaded ? (
                        <Footer />
                    ) : null
                }
            </View>

        );
    }
}
const styles = StyleSheet.create({
    buttonsStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    paymentSections: {
        marginBottom: 8,
        height: 40,
        width: 325,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },
    avatarImage: {
        width: 70,
        height: 70
    },
    startStyle: {
        width: 20,
        height: 20
    },
    imageFooter: {
        width: 15,
        height: 15
    },
    regContainer: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        width: 280,
        height: 350,
        justifyContent: 'space-around',
        borderRadius: 10,
        marginLeft: 40,
        marginBottom: 90,
        marginTop: 5,

    }, //#f5f6f8
    container: {
        flex: 1,
        backgroundColor: '#f5f6f8',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //width:'80%',
        //height:'100%',
    },
    greenIconStyle: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    footerIconStyle: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginBottom: 50
    },
    logoStyleHeart: {
        width: 20,
        height: 20,
        marginLeft: 90
    },
    logoContainer: {
        flex: 1,
        width: 40,
        height: 40,
        marginTop: 60,
        marginLeft: 40
    },
    withdrawSection: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginTop: 4,
        alignSelf: 'stretch',
        height: 100
    },
    historyTitle: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: 'stretch',
        height: 25
    },
    detailSection: {
        width: 325,
        height: 200,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        marginTop: 10
    },
    sectionPaymentMethod: {
        alignSelf: 'stretch',
        height: 110,
        backgroundColor: '#FFFFFF',
        padding: 10
    },

    section6: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        height: 80,
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: '#FFFFFF',

    },
    section6Inner: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginTop: 5
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
    input: {
        paddingTop: 10,
        paddingBottom: 10,
        color: '#424242',
        width: 300
    },
});
