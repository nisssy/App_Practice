import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { string } from 'prop-types';

function CircleButton(props) {
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>
        {children}
      </Text>
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467fd3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
});

export default CircleButton;
