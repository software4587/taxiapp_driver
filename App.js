import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
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









/*import SignUp from './app/components/signup';
import Search from './app/components/search';
import Query from './app/components/query';
import Signin from './app/components/signin';
import Aboutus from './app/components/aboutus';
import Jobsearch from './app/components/jobsearch';
import JobFilter from './app/components/jobfilter';
import ChangePassword from './app/components/changepassword';
import ForgotPassword from './app/components/forgotpassword';
import OtpVerify from './app/components/otpverify';
*/

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
  Welcome: {screen: Welcome,},
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





  const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    BuyCredits: {
      screen: BuyCreditsStack,
    },

    Dropoff: {
      screen: DropoffStack,
    },
    MyProfile: {
      screen: MyProfileStack,
    },


    CreateNewAccount: {
      screen: CreateNewAccountStack,
    },

    CompleteRegistration: {
      screen: CompleteRegistrationStack,
    },

    Dashboard: {
      screen: DashboardStack,
    },

    MyBookings: {
      screen: MyBookingsStack,
    },

    Welcome: {
      screen: WelcomeStack,
    },
    Signin: {
      screen: SigninStack,
    },
    Signup: {
      screen: SignupStack,
    },
    Pickup: {
      screen: PickupStack,
    },
    Settings: {
      screen: SettingsStack,
    },
    EditProfile: {
      screen: EditProfileStack,
    },
    Address: {
      screen: AddressStack,
    },
    Payment: {
      screen: PaymentStack,
    },
    BookRide: {
      screen: BookRideStack,
    },
    HomeRide: {
      screen: HomeRideStack,
    },
    MyRide: {
      screen: MyRideStack,
    },
    LeaveReview: {
      screen: LeaveReviewStack,
    }
    ,
    MyBalance: {
      screen: MyBalanceStack,
    }
    ,
    MyCredits: {
      screen: MyCreditsStack,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
