import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/pages/Home'

function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
})

export default App;
