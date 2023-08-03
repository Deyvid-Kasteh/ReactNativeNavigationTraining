import { SafeAreaView, Text, View } from "react-native";

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text>Página Cadastrar novo video</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0099ff",
  },
});