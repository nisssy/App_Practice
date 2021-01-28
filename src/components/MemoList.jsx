import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

function MemoList() {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => { navigation.navigate('Edit'); }}
      >
        <View style={styles.memoListItems}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity
            onPress={() => { Alert.alert('Are you sure?'); }}
            style={styles.memoDelete}
          >
            <Feather
              name="x"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { navigation.navigate('Edit'); }}
      >
        <View style={styles.memoListItems}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity
            onPress={() => { Alert.alert('Are you sure?'); }}
            style={styles.memoDelete}
          >
            <Feather
              name="x"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => { navigation.navigate('Edit'); }}
      >
        <View style={styles.memoListItems}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity
            onPress={() => { Alert.alert('Are you sure?'); }}
            style={styles.memoDelete}
          >
            <Feather
              name="x"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
  memoDelete: {
    padding: 8,
  },
});

export default MemoList;
