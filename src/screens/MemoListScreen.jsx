import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from '../components/AppBat';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
