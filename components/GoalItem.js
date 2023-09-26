import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ itemText, onDeleteItem, id }) => (
  <Pressable onPress={() => onDeleteItem(id)}>
    <View key={itemText} style={styles.goalItem}>
      <Text style={styles.goalText}>{itemText}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
