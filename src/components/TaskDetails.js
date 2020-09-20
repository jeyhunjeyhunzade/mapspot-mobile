import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Picker,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import * as theme from "../../assets/theme";

const { width, height } = Dimensions.get("screen");

const TaskDetails = ({ task, setActive, setActiveModal, hours, setHours }) => {
  // const shadowOpt = {
  //   width: 160,
  //   height: 170,
  //   // color: "#000",
  //   border: 2,
  //   radius: 3,
  //   opacity: 0.2,
  //   x: 0,
  //   y: 3,
  //   style: { marginVertical: 5 },
  // };

  return (
    <TouchableWithoutFeedback key={task.id} onPress={() => setActive(task.id)}>
      <View style={[styles.taskDetails, styles.shadow]}>
        <View style={styles.taskDetails_section1}>
          <Text style={{ fontSize: 16 }}>{task.title}</Text>
          {/* <Picker
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
          </Picker> */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <Entypo
              name="medal"
              size={theme.SIZES.icon * 1.1}
              color={theme.COLORS.gray}
            />
            <Text style={styles.iconText}>{task.score} puan</Text>
          </View>

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
              {/* <Ionicons
                name="ios-pricetag"
                size={16}
                color={theme.COLORS.gray}
              />
              <Text style={{ paddingLeft: 5 }}>${task.price}</Text> */}
              <Ionicons name="ios-star" size={16} color={theme.COLORS.gray} />
              <Text style={{ paddingLeft: 5 }}>{task.rating}</Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="map-marker-distance"
                size={18}
                color={theme.COLORS.gray}
              />
              <Text style={{ paddingLeft: 3 }}>{task.distance}km</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.getTask}
            onPress={() => setActiveModal(task)}
          >
            <View style={styles.getTask_part1}>
              <Text style={{ fontSize: 24, color: theme.COLORS.white }}>
                ${task.price}
              </Text>
              <Text style={{ color: theme.COLORS.white, fontSize: 12 }}>
                {/* {task.price}x{hours[task.id]} hrs */}
                detaylar
              </Text>
            </View>
            <View style={styles.getTask_part2}>
              <Text style={{ fontSize: 24, color: theme.COLORS.white }}>
                {">"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  taskDetails: {
    backgroundColor: theme.COLORS.white,
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
    backgroundColor: theme.COLORS.red,
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
    borderColor: theme.COLORS.gray,
    borderWidth: 0.5,
    padding: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.black,
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
