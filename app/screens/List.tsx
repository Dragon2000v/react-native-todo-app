import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { FIREBASE_DB } from '../../firebaseConfig';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

export interface Todo {
  title: string;
  done: boolean;
  id: string;
}

const List = ({ navigation }: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    const todoRef = collection(FIREBASE_DB, 'todos');

    const subscriber = onSnapshot(todoRef, {
      next: snapshot => {
        console.log('UPDATER');
        const todos: Todo[] = [];
        snapshot.docs.forEach(doc => {
          todos.push({
            id: doc.id,
            ...doc.data(),
          } as Todo);
        });
        setTodos(todos);
      },
    });
    return () => subscriber();
  }, []);

  const addTodo = async () => {
    const doc = await addDoc(collection(FIREBASE_DB, 'todos'), {
      title: todo,
      done: false,
    });
    setTodo('');
  };

  const renderTodo = ({ item }: any) => {
    const ref = doc(FIREBASE_DB, `todos/${item.id}`);

    const toggleDone = async () => {
      updateDoc(ref, { done: !item.done });
    };
    const deleteItem = async () => {
      deleteDoc(ref);
    };

    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={toggleDone} style={styles.todo}>
          {item.done && (
            <Ionicons name="checkmark-circle" size={32} color="green" />
          )}
          {!item.done && <Entypo name="circle" size={32} color="black" />}

          <Text style={styles.todoText}>{item.title}</Text>
        </TouchableOpacity>
        <Ionicons
          name="trash-bin-outline"
          size={32}
          color="red"
          onPress={deleteItem}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add new todo"
          onChangeText={(text: string) => setTodo(text)}
          value={todo}
        />
        <Button onPress={addTodo} title="Add Todo" disabled={todo === ''} />
      </View>
      {todos.length > 0 && (
        <View>
          <FlatList
            data={todos}
            renderItem={item => renderTodo(item)}
            keyExtractor={(todo: Todo) => todo.id}
          />
        </View>
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  form: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 4,
  },
  todoText: {
    flex: 1,
    paddingHorizontal: 4,
  },
  todo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
