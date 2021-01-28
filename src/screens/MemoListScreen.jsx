import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { shape } from 'prop-types';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('Create'); }}
      />
    </View>
  );
}

MemoListScreen.propTypes = {
  navigation: shape().isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
