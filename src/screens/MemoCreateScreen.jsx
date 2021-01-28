import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  // KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';
import { shape } from 'prop-types';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

function MemoCreateScreen(props) {
  const { navigation } = props;
  const [input, setInput] = useState('');

  function handlePress() {
    const userId = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    const ref = db.collection(`users/${userId}/memos`);
    ref.add({
      memo: input,
      updatedAt: new Date(),
    }).then((docRef) => {
      Alert.alert(docRef.id);
    }).catch((error) => {
      Alert.alert(error.code, error.message);
      // Alert.alert('メモの作成に失敗しました。'),
    });
    navigation.goBack();
  }
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          multiline
          style={styles.input}
          onChangeText={(text) => setInput(text)}
          autoFocus
        />
      </View>
      <View>
        <CircleButton
          name="check"
          style={{ top: 'auto', bottom: 40 }}
          onPress={handlePress}
        />
      </View>
    </KeyboardSafeView>
  );
}

MemoCreateScreen.propTypes = {
  navigation: shape().isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MemoCreateScreen;
