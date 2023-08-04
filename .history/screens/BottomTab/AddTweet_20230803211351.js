import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const AddTweet = () => {

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
      <Text>AddTweet</Text>
    </View>
  );
};

export default AddTweet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2bff00",
    justifyContent: "center",
    alignItems: "center",
  },
});
