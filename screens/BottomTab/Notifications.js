import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
    </View>
  );
}

export default Notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd000",
    justifyContent: "center",
    alignItems: "center",
  },
});