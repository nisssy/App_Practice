import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { shape } from 'prop-types';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;
    let unsubscribe = () => {};
    if (userId) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${userId}/memos`).orderBy('updatedAt', 'desc');
      const userMemos = [];

      unsubscribe = ref.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            textBody: data.memo,
            updatedAt: data.updatedAt.toDate(),
          });
          setMemos(userMemos);
        });
      }, () => {
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
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
