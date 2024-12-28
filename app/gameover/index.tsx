import { AppView } from "@/components/ui/AppView";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import { router, useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function GameOverScreen() {
  const { state } = useLocalSearchParams();
  return (
    <AppView>
      <View style={styles.container}>
        <View>
          <Title>{state === "win" ? "You won!" : "You lost!"}</Title>
          <View style={styles.buttonContainer}>
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
});
