import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemText, onDeleteItem, id }) => (
  <View key={itemText} style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={() => onDeleteItem(id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalText}>{itemText}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
