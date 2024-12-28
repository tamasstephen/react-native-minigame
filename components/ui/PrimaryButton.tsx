import { isIos } from "@/utils/helpers";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  const handlePressedStyles = ({ pressed }: { pressed: boolean }) =>
    pressed && isIos ? [styles.main, styles.pressed] : styles.main;

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={handlePressedStyles}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 28,
    marginVertical: 4,
    overflow: "hidden",
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "SpaceMonoBold",
  },
  pressed: {
    opacity: 0.75,
  },
});
