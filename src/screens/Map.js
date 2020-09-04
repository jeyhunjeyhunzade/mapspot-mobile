import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";
import Header from "../components/Header";
import TaskBar from "../components/TaskBar";

const Map = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
      <TaskBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    flex: 3,
  },
});

export default Map;
