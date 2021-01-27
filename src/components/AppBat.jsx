import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarTitle}>Memo App</Text>
        <Text style={styles.appBarLogout}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 140,
    backgroundColor: '#467fd3',
    justifyContent: 'flex-end',
  },
  appBarInner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appBarTitle: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  appBarLogout: {
    color: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    right: 19,
    bottom: 16,
  },
});

export default AppBar;
