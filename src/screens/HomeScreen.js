import React, { useState } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import MapView from "react-native-maps";

import Header from "../components/Header";
import TaskBar from "../components/TaskBar";
import CustomModal from "../components/Modal";
import { tasks } from "../../mock/mockTaskDetails";
import * as theme from "../../assets/theme";

const { Marker } = MapView;

const HomeScreen = ({ currentPosition }) => {
  const [active, setActive] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [hours, setHours] = useState({});

  return (
    <View style={styles.container}>
      <Header />
      <MapView
        initialRegion={{
          latitude: 40.4093,
          longitude: 49.8671,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        {tasks.map((task) => (
          <Marker
            key={task.id}
            coordinate={task.coordinate}
            onPress={() => setActive(task.id)}
          >
            {/* FIXME:  fixed with Marker onPress prop*/}
            <View
              style={[
                styles.taskMarker,
                active === task.id ? styles.active : null,
              ]}
            >
              <Text style={{ color: theme.COLORS.red, fontWeight: "bold" }}>
                ${task.price}{" "}
              </Text>
              <Text style={{ color: theme.COLORS.gray }}>
                ({task.free}/{task.spots})
              </Text>
            </View>
          </Marker>
        ))}
      </MapView>
      <TaskBar
        setActive={setActive}
        setActiveModal={setActiveModal}
        hours={hours}
        setHours={setHours}
      />
      <CustomModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        hours={hours}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
    // marginTop: StatusBar.currentHeight,
  },
  map: {
    flex: 3.8,
  },
  taskMarker: {
    flexDirection: "row",
    backgroundColor: theme.COLORS.white,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 0.5,
    borderColor: theme.COLORS.white,
  },
  // markerShadow: {
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 12,
  //   },
  //   //FIXME: its seems shadows doesnt work
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4.0,
  // },
  active: {
    borderColor: theme.COLORS.red,
  },
});

export default HomeScreen;
