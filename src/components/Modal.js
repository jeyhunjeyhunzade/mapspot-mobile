import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import * as theme from "../../assets/theme";
const { width, height } = Dimensions.get("screen");

const CustomModal = ({ activeModal, setActiveModal, hours }) => {
  if (!activeModal) return null;

  return (
    <Modal
      isVisible
      useNativeDriver
      swipeDirection="down"
      backdropColor={theme.COLORS.overlay}
      onBackButtonPress={() => setActiveModal(null)}
      onBackdropPress={() => setActiveModal(null)}
      onSwipeComplete={() => setActiveModal(null)}
      style={styles.modalContainer}
    >
      <View style={styles.modal}>
        <View>
          <Text style={{ fontSize: theme.SIZES.font * 1.5 }}>
            {activeModal.title}
          </Text>
        </View>
        <View style={{ paddingVertical: theme.SIZES.base }}>
          <Text
            style={{
              color: theme.COLORS.gray,
              fontSize: theme.SIZES.font,
            }}
          >
            {activeModal.description}
          </Text>
        </View>

        <View style={styles.modalInfo}>
          <View style={styles.taskInfoIcons}>
            <Ionicons
              name="ios-pricetag"
              size={theme.SIZES.icon * 1.1}
              color={theme.COLORS.gray}
            />
            <Text style={styles.iconText}>${activeModal.price}</Text>
          </View>

          <View style={styles.taskInfoIcons}>
            <Ionicons
              name="ios-star"
              size={theme.SIZES.icon * 1.1}
              color={theme.COLORS.gray}
            />
            <Text style={styles.iconText}>{activeModal.rating}</Text>
          </View>

          <View style={styles.taskInfoIcons}>
            <Ionicons
              name="ios-pin"
              size={theme.SIZES.icon * 1.1}
              color={theme.COLORS.gray}
            />
            <Text style={styles.iconText}>{activeModal.distance}km</Text>
          </View>

          <View style={styles.taskInfoIcons}>
            <Ionicons
              name="ios-car"
              size={theme.SIZES.icon * 1.1}
              color={theme.COLORS.gray}
            />
            <Text style={styles.iconText}>
              {activeModal.free}/{activeModal.spots}
            </Text>
          </View>
        </View>

        <View style={styles.modalHours}>
          <Text style={{ textAlign: "center" }}>
            Choose your Booking Period:{" "}
          </Text>
          <Text style={{ textAlign: "center" }}>05:00 hours</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payInfo}>Proceed to pay $20</Text>
            <FontAwesome
              name="angle-right"
              size={theme.SIZES.icon * 1.5}
              color={theme.COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modal: {
    flexDirection: "column",
    backgroundColor: theme.COLORS.white,
    width: width,
    height: height * 0.75,
    padding: theme.SIZES.base * 2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalInfo: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 8,
    paddingVertical: theme.SIZES.base,
    borderTopWidth: 1,
    borderTopColor: theme.COLORS.overlay,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.overlay,
  },
  modalHours: {
    paddingVertical: height * 0.12,
  },
  payBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.COLORS.red,
    padding: 18,
    borderRadius: 6,
  },
  payInfo: { fontSize: 18, color: theme.COLORS.white, fontWeight: "600" },
  taskInfoIcons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconText: { paddingLeft: 5, fontSize: theme.SIZES.icon },
});

export default CustomModal;
