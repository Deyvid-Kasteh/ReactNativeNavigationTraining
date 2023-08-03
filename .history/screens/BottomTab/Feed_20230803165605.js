import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Pressable, Image } from "react-native";

export default function Feed() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable>
          <Image
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
        <Text>Feed</Text>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://avatars.githubusercontent.com/u/99744584?s=96&v=4",
          }}
        />
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://avatars.githubusercontent.com/u/99744584?s=96&v=4",
          }}
        />
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
  profileImage: {
    width: 50,
    height: 50,
    borderR
  },
  // style={{width: '100%', height: '50%'}}
});