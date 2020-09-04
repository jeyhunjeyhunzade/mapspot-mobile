import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
    justifyContent: "center",
  },
});

export default Header;
