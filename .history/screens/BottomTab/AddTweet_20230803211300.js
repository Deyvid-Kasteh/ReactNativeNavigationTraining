import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AddTweet = () => {

  
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
