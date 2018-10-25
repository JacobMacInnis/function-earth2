import React from 'react';
import { View, Text, Button } from 'react-native';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../Input/Input';
import {required, nonEmpty} from '../../validators';

export class LoginForm extends React.Component {
    render() {
        let error;
        if (this.props.error) {
            error = (
                <View className="form-error" aria-live="polite">
                    {this.props.error}
                </View>
            );
        }
        return (
            <View title="login-form">
                {error}
                <Text htmlFor="username">Username</Text>
                <Field
                    component={Input}
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <Text htmlFor="password">Password</Text>
                <Field
                    component={Input}
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                    secureTextEntry={true}
                />
                <Button 
                  title="login" 
                  onPress={this.props.handleSubmit}>
                    <Text>Log in</Text>
                </Button>
            </View>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);