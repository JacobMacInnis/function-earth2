import React from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation'; 

// Components
import Registration from './src/components/Registration';
import MyFunctionEarth from './src/components/MyFunctionEarth';
import Login from './src/components/Login';

class HomeScreen extends React.Component {
  userLoggedIn() {
    console.log('Im trying')
    return () => this.props.navigation.navigate('MyFunctionEarth');
  }
  render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Login.js</Text>
          <Login userLoggedIn={this.userLoggedIn} />
        </View>
        <Button
          title="Registration"
          onPress={() => this.props.navigation.navigate('Registration')}
        />
        <Button
          title="MyFunctionEarth"
          onPress={() => this.props.navigation.navigate('MyFunctionEarth')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen, // loginScreen
    Registration: Registration,
    MyFunctionEarth: MyFunctionEarth
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