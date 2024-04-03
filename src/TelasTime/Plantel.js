import React, { useState, useEffect } from "react";
import { Button, Text, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Plantel(props) {
 const navigation = useNavigation();
 const [times, setTimes] = useState([]);
 const { time, simbolo } = props;

 useEffect(() => {
    const timesData = require("../../assets/times.json");
    setTimes(timesData);
 }, []);

 // Filtrar o time desejado do array times
 const timeDesejado = times.find((t) => t.nome === time);

 return (
    <View style={styles.container}>
      
      {timeDesejado ? (
        <View>
          <Text style={styles.timeName}>{time}</Text>
          <Image style={styles.image} source={{ uri: simbolo }} />
          {timeDesejado.elenco.map((posicao, i) => (
            <View key={i} style={styles.posicaoContainer}>
              <Text style={styles.posicao}>{posicao.posicao}</Text>
              {posicao.jogadores.map((jogador, j) => (
                <Text key={j} style={styles.jogador}>{jogador}</Text>
              ))}
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.loadingText}>Carregando...</Text>
      )}
        <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 timeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
 },
 image: {
    width: 100,
    height: 100,
    marginBottom: 20,
 },
 posicaoContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '80%',
 },
 posicao: {
    fontWeight: 'bold',
    marginBottom: 5,
 },
 jogador: {
    fontSize: 16,
 },
 loadingText: {
    fontSize: 18,
 },
});

export default Plantel;
