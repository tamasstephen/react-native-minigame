import { useLocalSearchParams } from "expo-router";
import { AppView } from "@/components/AppView";
import { View, Text } from "react-native";

function GameScreen() {
  const { guess } = useLocalSearchParams();
  return (
    <AppView>
      <View>
        <Text>The game starts with this number: {guess.toString()}</Text>
      </View>
    </AppView>
  );
}

export default GameScreen;
