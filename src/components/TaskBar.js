import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Picker,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { tasks } from "../../mock/mockTaskDetails";

const { width, height } = Dimensions.get("screen");

const taskDetails = (item) => {
  const [hours, setHours] = useState({});

  return (
    <View key={item.id} style={styles.taskDetails}>
      <View style={styles.taskDetails_section1}>
        <Text style={{ fontSize: 16 }}>
          x {item.spots} {item.title}
        </Text>
        <Picker
          selectedValue={hours[item.id]}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            setHours({ hours: { ...hours, [item.id]: itemValue } })
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
            <Text style={{ paddingLeft: 5 }}>${item.price}</Text>
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
            <Text style={{ paddingLeft: 5 }}>{item.rating}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.getTask}>
          <View style={styles.getTask_part1}>
            <Text style={{ fontSize: 24, color: "white" }}>
              ${item.price * 2}
            </Text>
            <Text style={{ color: "white" }}>
              {item.price}x{hours[item.id]} hrs
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

const TaskBar = () => {
  return (
    // <FlatList
    //   horizontal
    //   pagingEnabled
    //   scrollEnabled
    //   scrollEventThrottle={16}
    //   showsHorizontalScrollIndicator={false}
    //   snapToAlignment="center"
    //   style={styles.taskBar}
    //   data={tasks}
    //   renderItem={({ task }) => taskDetails(task)}
    // />
    <ScrollView
      horizontal
      pagingEnabled
      scrollEnabled
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      style={styles.taskBar}
    >
      {tasks.map((task) => taskDetails(task))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  taskBar: {
    // flex: 1,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 24,
  },
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
});

export default TaskBar;
