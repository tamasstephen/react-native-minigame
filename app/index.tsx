import PrimaryButton from "@/components/PrimaryButton";
import { Stack } from "expo-router";
import { View, Text, TextInput, StyleSheet } from "react-native";
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Start Game Screen</Text>
      <TextInput />
      <PrimaryButton>Confirm</PrimaryButton>
      <PrimaryButton>Cancel</PrimaryButton>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
export default StartGameScreen;
