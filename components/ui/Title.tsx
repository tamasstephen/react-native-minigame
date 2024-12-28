import { Text, View, StyleSheet } from "react-native";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 12,
    fontFamily: "SpaceMonoBold",
  },
});
