import { StyleSheet, View } from "react-native";

interface ProgressIndicatorProps {
  total: number;
  current: number;
  color?: string;
  inactiveColor?: string;
}

export default function ProgressIndicator({
  total,
  current,
  color = "#6B9E7F",
  inactiveColor = "#D3D3D3",
}: ProgressIndicatorProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor: index < current ? color : inactiveColor,
            },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
