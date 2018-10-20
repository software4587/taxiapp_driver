import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import Header from '../header.js';
import Footer from '../footer.js';
import {Font} from 'expo';

export default class MyProfile extends Component {
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
                        <Header name="MY PROFILE" fontFamily="GothamBold"/>
                    ) : null
                }
                <View style={{flex: 1}}>
                    <View style={styles.topMainContainer}>
                        <View style={styles.withdrawSection}>
                            <Image source={require('../images/man01.png')} style={styles.avatarImage}/>
                            <View style={{paddingLeft: 35}}>
                                <Text style={{fontWeight: 'bold'}}>John Doe</Text>
                                <Text>john.doe@gmail.com</Text>
                                <Text>Mobile: +65 52525252</Text>
                            </View>
                        </View>
                        <View style={{marginLeft: 100}}>
                            <Text style={{fontWeight: 'bold'}}>CAR INFORMATION</Text>
                            <Text>Mercedes CLA</Text>
                            <Text>SGA 15289</Text>
                        </View>
                        <View style={{marginLeft: 100}}>
                            <Text style={{fontWeight: 'bold'}}>CAR INFORMATION</Text>
                            <Text>Mercedes CLA</Text>
                            <Text>SGA 15289</Text>
                        </View>
                    </View>

                    <View style={styles.detailSection}>
                        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5, marginBottom: 5}}>
                            <Image source={require('../images/pencil.png')} style={styles.imageFooter}/>
                            <Text style={{paddingLeft: 20}}
                                  onPress={() => this.props.navigation.navigate('EditProfile')}>Edit Profile</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5, marginBottom: 5}}>
                            <Image source={require('../images/location_icon.png')} style={styles.imageFooter}/>
                            <Text style={{paddingLeft: 20}} onPress={() => this.props.navigation.navigate('MyCredits')}>My
                                Credits</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5, marginBottom: 5}}>
                            <Image source={require('../images/car.png')} style={styles.imageFooter}/>
                            <Text style={{paddingLeft: 20}}
                                  onPress={() => this.props.navigation.navigate('MyBookings')}>My Bookings</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5, marginBottom: 5}}>
                            <Image source={require('../images/key.png')} style={styles.imageFooter}/>
                            <Text style={{paddingLeft: 20}} onPress={() => this.props.navigation.navigate('MyBalance')}>My
                                Balance</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5, marginBottom: 5}}>
                            <Image source={require('../images/settinggear.png')} style={styles.imageFooter}/>
                            <Text style={{paddingLeft: 20}} onPress={() => this.props.navigation.navigate('Settings')}>Settings</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5, marginBottom: 5}}>
                            <Image source={require('../images/home.png')} style={styles.imageFooter}/>
                            <Text style={{paddingLeft: 20}}>Help</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5, marginBottom: 5}}>
                            <Image source={require('../images/logout.png')} style={styles.imageFooter}/>
                            <Text style={{paddingLeft: 20}}>Logout</Text>
                        </View>
                    </View>
                </View>
                <Footer />
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
        width: 18,
        height: 18
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
        marginTop: 4,
        alignSelf: 'stretch',

    },
    topMainContainer: {
        height: 200,
        backgroundColor: '#FFFFFF',
        width: 325

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
        marginTop: 50,
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
