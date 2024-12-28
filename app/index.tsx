import { AppView } from "@/components/AppView";
import PrimaryButton from "@/components/PrimaryButton";
import { Stack } from "expo-router";
import { View, Text, TextInput, StyleSheet } from "react-native";
function StartGameScreen() {
  const confirmOnPress = () => {
    console.log("confirmed");
  };
  const resetOnPress = () => {
    console.log("reset");
  };
  return (
    <AppView>
      <View style={styles.inputContainer}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.buttonContainer}>
          <Text style={styles.instructions}>
            Please enter a number between 1 and 99
          </Text>
          <TextInput
            maxLength={2}
            style={styles.textInput}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.buttonHolder}>
            <PrimaryButton onPress={resetOnPress}>Reset</PrimaryButton>
            <PrimaryButton onPress={confirmOnPress}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </AppView>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textInput: {
    height: 50,
    width: 50,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 12,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 16,
    marginTop: 16,
    backgroundColor: "#4e0329",
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 8,
  },
  instructions: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 8,
    textAlign: "center",
    width: "80%",
  },
});
export default StartGameScreen;
