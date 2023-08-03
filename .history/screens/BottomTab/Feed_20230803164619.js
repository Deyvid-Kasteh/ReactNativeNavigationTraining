import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function Feed() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable>
          <Image source={}/>
        </Pressable>
    )
  })
})




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