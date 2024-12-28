import { AppView } from "@/components/ui/AppView";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Stack } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { router, Href } from "expo-router";
import Colors from "@/constants/Colors";

function StartGameScreen() {
  const [enteredValue, setEnteredValue] = useState("");

  const confirmOnPress = () => {
    if (!enteredValue) {
      return;
    }
    router.push(`/game?guess=${enteredValue}` as Href);
    setEnteredValue("");
  };
  const resetOnPress = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = (providedValue: string) => {
    const chosenNumber = Number(providedValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetOnPress }]
      );
      return;
    }
  };

  const handleTextChange = (text: string) => {
    confirmInputHandler(text);
    setEnteredValue(text);
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
            onChangeText={handleTextChange}
            value={enteredValue}
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
    fontFamily: "SpaceMonoBold",
    height: 50,
    width: 50,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
    backgroundColor: Colors.primary800,
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
    fontFamily: "SpaceMonoBold",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 8,
    textAlign: "center",
    width: "80%",
  },
});
export default StartGameScreen;
