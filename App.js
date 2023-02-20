import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import products from './src/data/products';
import Navigation from './src/Navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
