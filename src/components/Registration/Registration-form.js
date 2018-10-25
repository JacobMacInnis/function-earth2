import React from 'react';
import { View, Text, Button } from 'react-native';
import { Field, reduxForm, focus } from 'redux-form';
import Input from '../Input/Input';
import { required, nonEmpty, matches, length, isTrimmed } from '../../validators';

import styles from './registration-form.styles';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>First Name</Text>
          <Field 
            component={Input} 
            name="firstName" 
            placeholder={'Name'}/>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Username</Text>
          <Field
              component={Input}
              name="username"
              validate={[required, nonEmpty, isTrimmed]}
              placeholder={'username'}
          />
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Password</Text>
          <Field
              component={Input}
              name="password"
              validate={[required, passwordLength, isTrimmed]}
              placeholder={'password'}
              secureTextEntry={true}
          />
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Confirm Password</Text>
          <Field
              component={Input}
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
              placeholder={'password'}
              secureTextEntry={true}
          />
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

export default reduxForm({
    form: 'registration',
    
})(RegistrationForm);

// onSubmitFail: (errors, dispatch) =>
//         dispatch(focus('registration', Object.keys(errors)[0]))