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
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://avatars.githubusercontent.com/u/99744584?s=96&v=4",
            }}
          />
        </Pressable>
      ),
    });
  }, []);




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
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
});
