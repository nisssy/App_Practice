import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';

function Button(props) {
  const { value, onPress } = props;

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
    >
      <Text style={styles.buttonLabel}>{value}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  value: string.isRequired,
  onPress: func.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467fd3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
    color: '#fff',
  },
});

export default Button;
