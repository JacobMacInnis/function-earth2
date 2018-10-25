import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import HeaderBar from '../Header-Bar/Header-Bar';
import requiresLogin from '../requires-login.js'

class MyFunctionEarth extends React.Component {
  
  // .then(() => this.props.dispatch(login(username, password)));
  render() {
    console.log('loading MyFunctionEarth')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <HeaderBar />
        <Text>My Function Earth</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

// export default connect(mapStateToProps)(MyFunctionEarth);
export default requiresLogin()(connect(mapStateToProps)(MyFunctionEarth));