import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({buttonStyle, title, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#269e3e',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default Button;