import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Picker,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const TaskDetails = ({ task }) => {
  const [hours, setHours] = useState({});

  const shadowOpt = {
    width: 160,
    height: 170,
    // color: "#000",
    border: 2,
    radius: 3,
    opacity: 0.2,
    x: 0,
    y: 3,
    style: { marginVertical: 5 },
  };

  return (
    <View key={task.id} style={[styles.taskDetails, styles.shadow]}>
      <View style={styles.taskDetails_section1}>
        <Text style={{ fontSize: 16 }}>
          x {task.spots} {task.title}
        </Text>
        <Picker
          selectedValue={hours[task.id]}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            setHours({ hours: { ...hours, [task.id]: itemValue } })
          }
        >
          <Picker.Item label="01:00" value="1" />
          <Picker.Item label="02:00" value="2" />
          <Picker.Item label="03:00" value="3" />
          <Picker.Item label="04:00" value="4" />
          <Picker.Item label="05:00" value="5" />
          <Picker.Item label="06:00" value="6" />
        </Picker>
        {/* <View style={styles.hourSelector}>
            <Text style={{ fontSize: 16 }}>05:00 hrs</Text>
          </View> */}
      </View>

      <View style={styles.taskDetails_section2}>
        <View
          style={{
            flex: 0.8,
            // justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 24,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-pricetag" size={16} color="#7D818A" />
            <Text style={{ paddingLeft: 5 }}>${task.price}</Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-star" size={16} color="#7D818A" />
            <Text style={{ paddingLeft: 5 }}>{task.rating}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.getTask}>
          <View style={styles.getTask_part1}>
            <Text style={{ fontSize: 24, color: "white" }}>
              ${task.price * 2}
            </Text>
            <Text style={{ color: "white" }}>
              {task.price}x{hours[task.id]} hrs
            </Text>
          </View>
          <View style={styles.getTask_part2}>
            <Text style={{ fontSize: 24, color: "white" }}>{">"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskDetails: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 12,
    flexDirection: "row",
    marginHorizontal: 24,
    width: width - 24 * 2,
  },
  taskDetails_section1: {
    flex: 1,
    flexDirection: "column",
  },
  taskDetails_section2: {
    flex: 1.5,
    flexDirection: "row",
  },
  getTask: {
    flex: 1.8,
    flexDirection: "row",
    backgroundColor: "#B40B15",
    padding: 12,
    borderRadius: 6,
  },
  getTask_part1: {
    flex: 1,
    justifyContent: "center",
  },
  getTask_part2: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  hourSelector: {
    width: 100,
    borderRadius: 6,
    borderColor: "grey",
    borderWidth: 0.5,
    padding: 4,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 12,
    },
    //FIXME: its seems shadows doesnt work
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 4.0,
  },
});

export default TaskDetails;
