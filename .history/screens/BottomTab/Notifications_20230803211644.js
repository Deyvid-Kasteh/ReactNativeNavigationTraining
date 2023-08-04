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

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd000",
    justifyContent: "center",
    alignItems: "center",
  },
});
