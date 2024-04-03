import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

function Home(props, { route, navigation }) {
 const { time, facanha, simbolo } = props;
 return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela do Time</Text>
      <Text style={styles.text}>{time}</Text>
      <Image style={styles.image} source={{ uri: simbolo }} />
      <Text style={styles.text}>{facanha}</Text>
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
 },
 text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
 },
 image: {
    width: 200,
    height: 200,
    margin: 10,
 },
});

export default Home;
