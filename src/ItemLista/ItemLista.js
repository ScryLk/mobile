import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ItemLista(props) {


  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{ uri: props.simbolo }}
      />
      <View>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.facanha}>{props.facanha}</Text>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  img: {
    width: 100,
    height: 100,

  },
  nome: {
    fontSize: 20,

  },
  facanha: {
    fontSize: 16,
  }
});

export default ItemLista;