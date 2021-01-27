import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MemoList() {
  return (
    <>
      <View>
        <View style={styles.memoListItems}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Feather name="x" />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.memoListItems}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.memoListItems}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  memoListItems: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});

export default MemoList;
