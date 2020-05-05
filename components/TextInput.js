import React, {Component} from 'react';
import {TextInput} from 'react-native';

const TextInputTest = () => {
  const [text, setText] = React.useState('');
  return (
    <TextInput
      onChangeText = {t => setText(t)}
      value = {text}
      placeholder = "dien vao day ne"
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    />
  );
}
export default TextInputTest;