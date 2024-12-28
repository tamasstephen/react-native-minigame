import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function AppView({ children }: { children: React.ReactNode }) {
  return (
    <LinearGradient
      colors={["#3b021f", "#ddb52f"]}
      style={styles.backgroundColor}
    >
      <ImageBackground
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        source={require("@/assets/images/background.png")}
        resizeMode="cover"
        style={styles.backgroundColor}
        imageStyle={{ opacity: 0.5 }}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
  },
});
