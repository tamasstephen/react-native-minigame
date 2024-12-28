import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

export function AppView({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500]}
      style={styles.backgroundColor}
    >
      <ImageBackground
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require("@/assets/images/background.png")}
        resizeMode="cover"
        style={styles.backgroundColor}
        imageStyle={{ opacity: 0.5 }}
      >
        <SafeAreaView style={styles.backgroundColor}>{children}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
  },
});
