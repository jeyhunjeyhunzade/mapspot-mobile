import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import TaskDetails from "./TaskDetails";
import { tasks } from "../../mock/mockTaskDetails";

const TaskBar = ({ setActive, setActiveModal, hours, setHours }) => {
  return (
    <FlatList
      horizontal
      pagingEnabled
      scrollEnabled
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      style={styles.taskBar}
      data={tasks}
      keyExtractor={(item) => `task-${item.id}`}
      renderItem={({ item }) => (
        <TaskDetails
          task={item}
          setActive={setActive}
          setActiveModal={setActiveModal}
          hours={hours}
          setHours={setHours}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  taskBar: {
    // flex: 1,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    paddingBottom: 24,
  },
});

export default TaskBar;
