import { Text, View, Image, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal',
      }}
    >
      <Image
        source={require('../assets/images/react-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Hello World!</Text>
      <Text style={styles.subtitle}>My First React Native Cross Platform App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },

});
