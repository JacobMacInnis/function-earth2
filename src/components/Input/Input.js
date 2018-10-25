import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './input.styles';
/**
 * to be wrapped with redux-form Field component
 */
export default function Input(props) {
  const { input, meta, ...inputProps } = props;

  // do not display warning if the field has not been touched or if it's currently being edited
  const validationStyles = meta.touched && !meta.active
    ? meta.valid ? styles.valid : styles.invalid
    : null;

  return (
    <View style={[styles.inputContainer, validationStyles]}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={styles.input}
        underlineColorAndroid='transparent'
      />
    </View>
  );
}