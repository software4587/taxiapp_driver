import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from './app/components/home';
import SignUp from './app/components/signup';
import Search from './app/components/search';
import Query from './app/components/query';
import Signin from './app/components/signin';
import Aboutus from './app/components/aboutus';
import Jobsearch from './app/components/jobsearch';
import JobFilter from './app/components/jobfilter';
import OtpVerify from './app/components/otpverify';
import ChangePassword from './app/components/changepassword';
import ForgotPassword from './app/components/forgotpassword';


//import TestLogin from './app/components/testlogin';
//import HeaderTop from './app/components/headertop';

const Stack = createStackNavigator({
  OtpVerify:{screen:OtpVerify},
  'ForgotPassword':{screen:ForgotPassword},
}, {
      mode: 'modal',
      headerMode: 'none',
    }
);

const MyDrawerNavigator = createDrawerNavigator({
  Home:{screen:Home},
  Login:{screen:Signin},
  Register:{screen:SignUp},
  'Job Search':{screen:Jobsearch},
  'About Us':{screen:Aboutus},
  'Any Query':{screen:Query},
  'Job Filter':{screen:JobFilter},
  'Jobs':{screen:Search},
  //'OtpVerify':{screen:OtpVerify},
  'ChangePassword':{screen:ChangePassword},
  '':{screen:Stack},

},
{
  initialRouteName : 'Home',
  drawerPosition: 'left',
  drawerBackgroundColor: '#fe7b3a',
  contentOptions: {
  labelStyle: {
    color: 'white',
  },
   activeTintColor :'#ffffff',
}
}
);

export default class App extends React.Component {
render() {
  return (
      <Provider store={store}>
        <MyDrawerNavigator />
      </Provider>
  );
}


}
