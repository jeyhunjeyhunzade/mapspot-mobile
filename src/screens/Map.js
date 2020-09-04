import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";
import Header from "../components/Header";
import TaskBar from "../components/TaskBar";
import { tasks } from "../../mock/mockTaskDetails";

const { Marker } = MapView;

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
      >
        {tasks.map((task) => (
          <Marker key={task.id} coordinate={task.coordinate}>
            <View style={[styles.taskMarker, styles.markerShadow]}>
              <Text style={{ color: "#B40B15", fontWeight: "bold" }}>
                ${task.price}{" "}
              </Text>
              <Text style={{ color: "#7D818A" }}>
                ({task.free}/{task.spots})
              </Text>
            </View>
          </Marker>
        ))}
      </MapView>
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
  taskMarker: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  markerShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    //FIXME: its seems shadows doesnt work
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
  },
});

export default Map;
