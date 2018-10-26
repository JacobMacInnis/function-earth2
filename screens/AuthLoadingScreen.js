import React from 'react';
import { View, StatusBar, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

// Import Screens
import FunctionEarth from './FunctionEarth';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import UserCreation from './UserCreation';
import OtherScreen from './OtherScreen';


class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }


  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('authToken');
    console.log(userToken)
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({ Home: FunctionEarth, Other: OtherScreen });

const AuthStack = createStackNavigator({ Login: LoginScreen, Registration: RegistrationScreen, UserCreation: UserCreation });


export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
);