import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Feed() {
    return (
      <View style={styles.container}>
        <Text>Feed</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0099ff",
    justifyContent: "center",
    alignItems: "center",
  },
});