import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  // KeyboardAvoidingView,
} from 'react-native';
import { shape } from 'prop-types';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

function MemoEditScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <View>
        <CircleButton
          name="check"
          style={{ top: 'auto', bottom: 40 }}
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    </KeyboardSafeView>
  );
}

MemoEditScreen.propTypes = {
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

export default MemoEditScreen;
