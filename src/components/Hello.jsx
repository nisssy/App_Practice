import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { string, bool, shape } from 'prop-types';

const Hello = (props) => {
  const { children, bang, style } = props;

  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
};

Hello.propTypes = {
  children: string.isRequired,
  style: shape(),
  bang: bool,
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: 'blue',
    padding: 16,
  },
});

export default Hello;
