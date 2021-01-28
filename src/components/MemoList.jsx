import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  arrayOf,
  shape,
  string,
  instanceOf,
} from 'prop-types';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => { navigation.navigate('Detail'); }}
      >
        <View style={styles.memoListItems}>
          <View>
            <Text style={styles.memoListTitle} numberOfLines={1}>{item.textBody}</Text>
            <Text style={styles.memoListDate}>{String(item.updatedAt)}</Text>
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
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string.isRequired,
    memo: string.isRequired,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
