import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Login from './Login';
//import Secured from './Secured';

class TestLogin extends Component {
    render() {
        if (this.props.isLoggedIn) {
            //return <Secured />;
            alert('loggedin');
        } else {
            //return <Login />;
            alert('not logged in');
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(TestLogin);
