import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import data from "./components/data";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {data.map(({ bg, color, album, year }) => {
        return (
          <TouchableOpacity
            key={album}
            onPress={() => {}}
            style={styles.cardContainer}
            activeOpacity={0.9}
          >
            <View style={[styles.card, { backgroundColor: bg }]}>
              <Text style={[styles.heading, { color }]}>{album}</Text>
              <Text style={[styles.heading, { color }]}>{year}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: -1,
  },
});
