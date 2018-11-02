import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Field, reduxForm, focus } from 'redux-form';

// Import Components
import Input from './Input';

// Import Validation functions
import { required, nonEmpty, matches, length, isTrimmed } from './../validators';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    render() {
      return (
        <View>
            <View style={{ display: 'flex', displayDirection: 'row',  backgroundColor: 'black'}}>
                <View style={{ flex: 1, backgroundColor: 'red'}}>
                    <Text style={{ fontWeight: 'bold'}}>First Name</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: 'tan' }}>
                    <Field 
                        component={Input} 
                        name="firstName" 
                        placeholder={'Name'}
                        />
                </View>
            </View>
            <View>
                <View style={{ backgroundColor: 'transparent' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>city, state or zipcode</Text>
                </View>
                <View style={{ backgroundColor: 'transparent' }}>
                    <Field
                        component={Input}
                        name="location"
                        validate={[required, nonEmpty]}
                        placeholder={'city, state or zipcode'}
                    />
                </View>
            </View>
            <View>
                <View style={{ backgroundColor: 'aqua'}}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Username</Text>
                </View>
                <View style={{ backgroundColor: 'green' }}>
                    <Field
                        component={Input}
                        name="username"
                        validate={[required, nonEmpty, isTrimmed]}
                        placeholder={'username'}
                    />
                </View >
            </View>
            <View style={{ backgroundColor: 'teal' }}>
                <View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Password</Text>
                </View>
                <View style={{ backgroundColor: 'magenta' }}>
                    <Field
                        component={Input}
                        name="password"
                        validate={[required, passwordLength, isTrimmed]}
                        placeholder={'password'}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <View>
                <View style={{ backgroundColor: 'grey' }}>
                    <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Confirm Password</Text>
                </View>
                <View style={{ backgroundColor: 'brown' }}>
                    <Field
                        component={Input}
                        name="passwordConfirm"
                        validate={[required, nonEmpty, matchesPassword]}
                        placeholder={'password'}
                        secureTextEntry={true}
                    />
                </View>
            </View>
          <Button
              title='Register'
              onPress={this.props.handleSubmit}
              >
              <Text>Register</Text>
          </Button>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  // container: {
  //   padding: 45
  // },
  // formSubmit: {
  //   alignSelf: 'center',
  //   fontWeight: 'bold',
  //   fontSize: 15,
  //   marginTop: 25,
  //   padding: 5
  // },
});

export default reduxForm({
    form: 'registration',
    
})(RegistrationForm);

// onSubmitFail: (errors, dispatch) =>
//         dispatch(focus('registration', Object.keys(errors)[0]))