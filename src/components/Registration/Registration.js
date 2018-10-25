import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { registerUser }  from '../../store/actions/users';
import { login } from '../../store/actions/auth';
import RegistrationForm from './Registration-form';

class Registration extends React.Component {
  onSubmitRegistration(values) {
    const {username, password, firstName} = values;
    const user = {username, password, firstName};
    this.props.dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
      .then(() => {
        if (this.props.loggedIn) {
        return this.props.navigation.navigate('MyFunctionEarth')
        }
      })   
  }
  render() {
    console.log(this.props)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Registration</Text>
        <Button
          title="Go to Registration... again"
          onPress={() => this.props.navigation.push('Registration')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <RegistrationForm onSubmit={(values) => this.onSubmitRegistration(values)}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Registration);