import React from 'react';
import {Button, Image, Text, View, StyleSheet} from 'react-native';
// import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';

import Home from './app/components/home';
import Welcome from './app/components/welcome';
import Signin from './app/components/signin';
import Signup from './app/components/signup';
import Pickup from './app/components/pickup';
import Settings from './app/components/settings';
import EditProfile from './app/components/editprofile';
import Address from './app/components/address';
import Payment from './app/components/payment';
import BookRide from './app/components/bookride';
import HomeRide from './app/components/homeride';
import MyRide from './app/components/myride';
import LeaveReview from './app/components/leavereview';
import MyBalance from './app/components/mybalance';
import MyCredits from './app/components/mycredits';
import MyBookings from './app/components/mybookings';
import Dashboard from './app/components/dashboard';
import CompleteRegistration from './app/components/completeregistration';
import CreateNewAccount from './app/components/createnewaccount';
import Dropoff from './app/components/dropoff';
import MyProfile from './app/components/myprofile';
import BuyCredits from './app/components/buycredits';
import {Icon} from "react-native-vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
// import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import AwesomeButton from 'react-native-really-awesome-button';

import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';


const HomeStack = createStackNavigator({
    Home: {screen: Home},
});
const MyProfileStack = createStackNavigator({
    MyProfile: {screen: MyProfile},
});
const BuyCreditsStack = createStackNavigator({
    BuyCredits: {screen: BuyCredits},
});

const CreateNewAccountStack = createStackNavigator({
    CreateNewAccount: {screen: CreateNewAccount},
});

const CompleteRegistrationStack = createStackNavigator({
    CompleteRegistration: {screen: CompleteRegistration},
});

const DashboardStack = createStackNavigator({
    Dashboard: {screen: Dashboard},
});
const WelcomeStack = createStackNavigator({
    Welcome: {screen: Dashboard,},
    // Welcome: {screen: Welcome,},
});
const SigninStack = createStackNavigator({
    Signin: {screen: Signin,},
});
const SignupStack = createStackNavigator({
    Signup: {screen: Signup,},
});
const PickupStack = createStackNavigator({
    Pickup: {screen: Pickup},
});
const SettingsStack = createStackNavigator({
    Settings: {screen: Settings},
});
const EditProfileStack = createStackNavigator({
    EditProfile: {screen: EditProfile},
});
const AddressStack = createStackNavigator({
    EditProfile: {screen: Address},
});
const PaymentStack = createStackNavigator({
    Payment: {screen: Payment},
});
const BookRideStack = createStackNavigator({
    BookRide: {screen: BookRide},
});
const HomeRideStack = createStackNavigator({
    HomeRide: {screen: HomeRide},
});
const MyRideStack = createStackNavigator({
    MyRide: {screen: MyRide},
});
const LeaveReviewStack = createStackNavigator({
    LeaveReview: {screen: LeaveReview},
});
const MyBalanceStack = createStackNavigator({
    MyBalance: {screen: MyBalance},
});
const MyCreditsStack = createStackNavigator({
    MyCredits: {screen: MyCredits},
});
const MyBookingsStack = createStackNavigator({
    MyBookings: {screen: MyBookings},
});
const DropoffStack = createStackNavigator({
    Dropoff: {screen: Dropoff},
});


// const RootStack = createStackNavigator(
const RootStack = createBottomTabNavigator(
// const RootStack = createMaterialBottomTabNavigator(
    {
        MyProfile: {
            screen: MyCredits,
            navigationOptions: {
                tabBarLabel: 'My Profile',
                tabBarIcon: () => (
                    <Image source={require('./app/components/images/user_icon.png')} style={styles.footerIconStyle}/>
                ),

                tabBarOptions: {
                    labelStyle: {
                        fontSize: 12,
                    },
                    tabStyle: {
                        width: 100,
                    },
                    style: {
                        backgroundColor: '#ffffff',
                    },
                }
            }
        },
        BuyCredits: {
            screen: DashboardStack,
            navigationOptions: {
                tabBarLabel: 'Buy Credits',
                tabBarIcon: () => (
                    <Image source={require('./app/components/images/file-bag.png')} style={styles.footerIconStyle}/>
                )
            }
        },
        Dashboard: {
            screen: DashboardStack,
            navigationOptions: {
                tabBarLabel: 'Dashboard',
                tabBarIcon: () => (
                    <Image source={require('./app/components/images/file-bag.png')} style={{
                        width: 30,
                        height: 30,
                    }}/>
                ),
                style: {
                    backgroundColor: '#1f5618',
                    borderTopWidth: 2,
                },
            }
        },
        MyBalance: {
            screen: MyBalanceStack,
            navigationOptions: {
                tabBarLabel: 'My Balance',
                tabBarIcon: () => (
                    <Image source={require('./app/components/images/dollar.png')} style={styles.footerIconStyle}/>
                )
            }
        },
        GetHelp: {
            screen: MyBalanceStack,
            navigationOptions: {
                tabBarLabel: 'Get Help',
                tabBarIcon: () => (
                    <Image source={require('./app/components/images/gethelp.png')} style={styles.footerIconStyle}/>
                )
            }
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
);

const styles = StyleSheet.create({
    footerIconStyle: {
        width: 30,
        height: 30,
        //marginLeft:10,
        //marginBottom:20
    },
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
