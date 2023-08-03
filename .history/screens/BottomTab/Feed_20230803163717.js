import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Pressable } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Feed() {
  const navigation = useNavigation();


  useLayoutEffect
    return (
      <Pressable style={styles.container}>
        <Text>Feed</Text>
      </Pressable>
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