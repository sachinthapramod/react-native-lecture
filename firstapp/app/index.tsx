import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "teal",
      }}
    >
      <Text>Hello World!</Text>
      <Text>My First React Native Cross Platform App</Text>
    </View>
  );
}
