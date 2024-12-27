import { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Logo.png')} style={styles.logo} />

      <View>
        <View style={styles.row}>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
          />
        </View>
        
        <View style={styles.row}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={styles.row}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5B893',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200
  },
  input: {
    height: 25,
    width: 100,
    borderWidth: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10',
    marginTop: 15
  }
});
