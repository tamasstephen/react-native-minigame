import { router } from "expo-router";
import { AppView } from "@/components/ui/AppView";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useEffect } from "react";
import Title from "@/components/ui/Title";
import Guess from "@/components/game/Guess";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Color from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useGame } from "@/context/GameContext";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen() {
  const { currentNumber, currentGuess, setCurrentGuess, increaseRounds } =
    useGame();

  function generateRandomBetween(min: number, max: number, exclude?: number) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (exclude && rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
  }

  useEffect(() => {
    const initialGuess = generateRandomBetween(1, 100, Number(currentNumber));
    setCurrentGuess(initialGuess);
  }, []);

  useEffect(() => {
    if (Number(currentNumber) === currentGuess) {
      minBoundary = 1;
      maxBoundary = 100;
      router.push("../gameover", { relativeToDirectory: true });
    }
  }, [currentGuess]);

  function nextGuessHandler(direction: "lower" | "greater") {
    if (
      (direction === "lower" && currentGuess < Number(currentNumber)) ||
      (direction === "greater" && currentGuess > Number(currentNumber))
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "destructive" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    increaseRounds();
    const nextNumber = generateRandomBetween(minBoundary, maxBoundary);
    setCurrentGuess(nextNumber);
  }

  return (
    <AppView>
      <View style={styles.container}>
        <Title>Opponent&apos;s Guess</Title>
        <Guess guess={currentGuess.toString()} />
        <View style={styles.guessContainer}>
          <Text style={styles.subtitle}>Higher or lower?</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons
                name="remove-outline"
                size={24}
                color={Color.accent500}
              />
            </PrimaryButton>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add-outline" size={24} color={Color.accent500} />
            </PrimaryButton>
          </View>
        </View>
        <View>
          <Text> Log rounds</Text>
        </View>
      </View>
    </AppView>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontFamily: "SpaceMonoBold",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    gap: 8,
  },
  guessContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: Color.accent500,
    borderWidth: 4,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 8,
    padding: 24,
    marginHorizontal: 24,
  },
});
