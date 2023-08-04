import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Drawer2 = () => {
  return (
    <View style={styles.container}>
      <Text>Drawer2</Text>
    </View>
  );
}

export default Drawer2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0099ff",
    justifyContent: "center",
    alignItems: "center",
  },
});