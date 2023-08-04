import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7a7a7a",
    justifyContent: "center",
    alignItems: "center",
  },
});
