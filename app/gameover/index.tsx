/* eslint-disable @typescript-eslint/no-require-imports */
import { AppView } from "@/components/ui/AppView";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import Colors from "@/constants/Colors";
import { router, useLocalSearchParams } from "expo-router";
import { View, StyleSheet, Image, Text } from "react-native";

export default function GameOverScreen() {
  const { state } = useLocalSearchParams();
  return (
    <AppView>
      <View style={styles.container}>
        <View style={styles.container}>
          <Title>{state === "win" ? "You won!" : "You lost!"}</Title>
          <Image
            source={require("@/assets/images/success.png")}
            style={styles.image}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.summaryText}>
                Your phone needed{" "}
                <Text style={styles.highlightText}>{`maxRounds`} </Text>rounds
                to guess the number{" "}
                <Text style={styles.highlightText}>{`numberToGuess`}</Text>.
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <PrimaryButton
                onPress={() => {
                  router.replace("/");
                }}
              >
                Restart
              </PrimaryButton>
            </View>
          </View>
        </View>
      </View>
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    paddingBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 16,
    borderRadius: 100,
    overflow: "hidden",
    objectFit: "cover",
    borderWidth: 4,
    borderColor: Colors.accent500,
  },
  summaryText: {
    fontSize: 20,
    color: "white",
    fontFamily: "SpaceMono",
    textAlign: "center",
  },
  highlightText: {
    color: Colors.accent500,
    fontFamily: "SpaceMonoBold",
  },
  textContainer: {
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 8,
    borderColor: Colors.accent500,
    borderWidth: 4,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
