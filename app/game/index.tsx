import { useLocalSearchParams } from "expo-router";
import { AppView } from "@/components/ui/AppView";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import Title from "@/components/ui/Title";
import Guess from "@/components/game/Guess";
import PrimaryButton from "@/components/ui/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen() {
  const { guess } = useLocalSearchParams();
  const numberToguess = parseInt(guess.toString());
  const [guessedNumber, setGuessedNumber] = useState(-1);

  function generateRandomBetween(min: number, max: number, exclude: number) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  useEffect(() => {
    const initialGuess = generateRandomBetween(
      minBoundary,
      maxBoundary,
      numberToguess
    );
    setGuessedNumber(initialGuess);
  }, []);

  function nextGuessHandler(direction: "lower" | "greater") {
    if (
      (direction === "lower" && guessedNumber < numberToguess) ||
      (direction === "greater" && guessedNumber > numberToguess)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "destructive" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = guessedNumber;
    } else if (direction === "greater") {
      minBoundary = guessedNumber + 1;
    } else {
      return;
    }
    const nextNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      guessedNumber
    );
    setGuessedNumber(nextNumber);
  }

  return (
    <AppView>
      <View style={styles.container}>
        <Title>Opponent&apos;s Guess</Title>
        <Guess guess={guessedNumber.toString()} />
        <View>
          <Text>Higher or lower?</Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              -
            </PrimaryButton>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              +
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});
