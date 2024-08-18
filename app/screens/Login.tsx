import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {};
  const signIn = async () => {};
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text: string) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        textContentType="password"
        placeholder="Password"
        onChangeText={(text: string) => setPassword(text)}
        value={password}
      />
      <Button onPress={signUp} title="Create account" />
      <Button onPress={signIn} title="Sign ip" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
});
