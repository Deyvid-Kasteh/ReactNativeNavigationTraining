import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Drawer5 = () => {
  return (
    <View style={styles.container}>
      <Text>Drawer5</Text>
    </View>
  );
}

export default Drawer5

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0099ff",
    justifyContent: "center",
    alignItems: "center",
  },
});