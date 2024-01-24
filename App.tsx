import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const Typographic = styled.div`
  font-size: 30px;
  font-weight: 800;
`
import { AppRegistry } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Typographic>Open up App.tsx to start working on your app!</Typographic>
      <Typographic>Open up App.tsx to start working on your app!</Typographic>
      <Typographic>Open up App.tsx to start working on your app!</Typographic>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
