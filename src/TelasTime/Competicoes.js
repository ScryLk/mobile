import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Competicoes(props) {
  const { time, simbolo } = props;

  const navigation = useNavigation();

  const [times, setTimes] = useState([]);

  useEffect(() => {
    const timesData = require("../../assets/times.json");
    setTimes(timesData);
  }, []);

  // Filtrar o time desejado do array times
  const timeDesejado = times.find((t) => t.nome === time);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 24, marginBottom: 10 }}>
          Competições do time {time}
        </Text>
        <Image style={styles.image} source={{ uri: simbolo }} />
      </View>
      <ScrollView>
        {timeDesejado ? (
          timeDesejado.competicoes.map((competicao, index) => (
            <View key={index} style={styles.competitionContainer}>
              <Text style={styles.competitionText}>{competicao.nome}</Text>
              <Text style={styles.competitionText}>
                Tipo: {competicao.tipo}
              </Text>
              <Text style={styles.competitionText}>
                Fase atual: {competicao.faseAtual}
              </Text>
              <Text style={styles.competitionText}>
                Início: {competicao.inicio}
              </Text>
              <Text style={styles.competitionText}>Fim: {competicao.fim}</Text>
            </View>
          ))
        ) : (
          <Text>Carregando...</Text>
        )}
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          style={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  competitionContainer: {
    width: "90%",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  competitionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default Competicoes;
