import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import * as theme from "../../assets/theme";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.title}>Detected Location</Text>
        <Text style={styles.location}>San Frascisco, US</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <TouchableWithoutFeedback>
          <Ionicons name="ios-menu" size={28} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 18,
  },
  title: {
    color: theme.COLORS.gray,
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 4,
  },
});

export default Header;
