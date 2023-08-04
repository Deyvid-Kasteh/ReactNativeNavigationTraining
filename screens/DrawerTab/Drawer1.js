import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Drawer1 = () => {
  return (
    <View style={styles.container}>
      <Text>Drawer1</Text>
    </View>
  );
}

export default Drawer1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0099ff",
    justifyContent: "center",
    alignItems: "center",
  },
});