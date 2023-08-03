import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Feed() {
  const navigation = useNavigation();


  useLayoutEffect
    return (
      <Pre style={styles.container}>
        <Text>Feed</Text>
      </Pre>
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