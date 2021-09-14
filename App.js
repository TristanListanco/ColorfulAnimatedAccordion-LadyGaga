import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import data from "./components/data";

export default function App() {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  console.log();
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {data.map(({ bg, color, album, year, songs }) => {
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
              <View style={[styles.songList, { color }]}>
                {songs.map((song) => (
                  <Text key={song} style={[styles.body]}>
                    {song}
                  </Text>
                ))}
              </View>
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
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: "center",
  },
});
