import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default function Guess({ guess }: { guess: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: Colors.accent500,
    borderWidth: 4,
    margin: 24,
    elevation: 4,
    boxShadow: "0 2 2 2 rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.accent500,
  },
});
