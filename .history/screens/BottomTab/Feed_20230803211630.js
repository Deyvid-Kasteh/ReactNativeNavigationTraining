import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, import { useLayoutEffect } from "react";
Text, View, Pressable, Image } from "react-native";

export default function Feed() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={()=> navigation.openDrawer()}>
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
    width: 45,
    height: 45,
    borderRadius: 100
  },
  // style={{width: '100%', height: '50%'}}
});