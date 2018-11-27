import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { createUserStats }  from '../src/actions/users';

class UserCreation extends React.Component {
  static navigationOptions = {
    title: 'Creating Function Earth Account',
  };
  componentDidMount() {
    
    this.props.dispatch(createUserStats())
      .then(() => {
        console.log('HEY JAKE')
        if (this.props.loggedIn) {
          this.props.navigation.navigate('App')
        }
      })  
  } 
  render() {
    return (
      <View>
        <Text>Creating your global Function Earth Account</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

const styles = StyleSheet.create({
});

export default connect(mapStateToProps)(UserCreation);