import { View, Text, StyleSheet, ImageBackground } from "react-native";

import appImage from "./assets/images/Second.jpg";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={appImage} style={styles.container}>
        <Text style={styles.text}>Coffe Shop </Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 42,
    textAlign: "center",
  },
});
