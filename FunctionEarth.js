import React from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation'; 
import { login } from './src/store/actions/auth';

import Registration from './src/components/Registration/Registration';
import MyFunctionEarth from './src/components/MyFunctionEarth/MyFunctionEarth';

import Login from './src/components/Login/Login';

class HomeScreen extends React.Component {
  onSubmitLogin(values) {
    const {username, password} = values;
    console.log('Im trying', username, password);
    this.props.dispatch(login(username, password))
      .then(() => {
        if (this.props.loggedIn) {
          console.log('logged in now time to navigate')
        return navigation.navigate('MyFunctionEarth')
        };
      }); 
  };
  render() {
    console.log('This.props', this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Login.js</Text>
          <Login onSubmit={(values) => this.onSubmitLogin(values)}/>
        </View>
        <Button
          title="Registration"
          onPress={() => this.props.navigation.navigate('Registration')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Registration: {
      screen: Registration,
    },
    MyFunctionEarth: {
      screen: MyFunctionEarth
    }
  },
  {
    initialRouteName: 'Home',
  }
);

class Home extends React.Component {
  render() {
    return <RootStack />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);