import React from 'react';
import { AsyncStorage, Button, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class FunctionEarth extends React.Component {
  static navigationOptions = {
    title: 'My Function Earth',
  };
  componentDidUpdate() {
    if (!this.props.loggedIn || this.props.error) {
      console.log('error', this.props.loggedIn)
      this.props.navigation.navigate('Auth');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  error: state.auth.error
});

export default connect(mapStateToProps)(FunctionEarth);