import React from "react";
import { Pressable, SafeAreaView, ScrollView, Text } from "react-native";
import ItemLista from "../ItemLista/ItemLista";



function Home({ navigation }) {
  return (
    <SafeAreaView>
      <Text>Lista de Times</Text>
      <ScrollView>
        <Pressable
          onPress={() => {
            navigation.navigate("TelaTime", {
              nome: "Flamengo",
              facanha: "Campeão Brasileiro 2020",
              simbolo:
                "https://logodetimes.com/times/flamengo/logo-flamengo-256.png",
            });
          }}
        >
          <ItemLista
            nome="Flamengo"
            facanha="Campeão Brasileiro 2020"
            simbolo="https://logodetimes.com/times/flamengo/logo-flamengo-256.png"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("TelaTime", {
              nome: "Palmeiras",
              facanha: "Campeão Brasileiro 2018",
              simbolo:
                "https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png",
            });
          }}
        >
          <ItemLista
            nome="Palmeiras"
            facanha="Campeão Brasileiro 2018"
            simbolo="https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("TelaTime", {
              nome: "Santos",
              facanha: "Campeão Brasileiro 2004",
              simbolo:
                "https://logodetimes.com/times/santos/logo-santos-256.png",
            });
          }}
        >
          <ItemLista
            nome="Santos"
            facanha="Campeão Brasileiro 2004"
            simbolo="https://logodetimes.com/times/santos/logo-santos-256.png"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("TelaTime", {
              nome: "Corinthians",
              facanha: "Campeão Brasileiro 2017",
              simbolo:
                "https://logodetimes.com/times/corinthians/logo-corinthians-256.png",
            });
          }}
        >
          <ItemLista
            nome="Corinthians"
            facanha="Campeão Brasileiro 2017"
            simbolo="https://logodetimes.com/times/corinthians/logo-corinthians-256.png"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("TelaTime", {
              nome: "São Paulo",
              facanha: "Campeão Brasileiro 2008",
              simbolo:
                "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-256.png",
            });
          }}
        >
          <ItemLista
            nome="São Paulo"
            facanha="Campeão Brasileiro 2008"
            simbolo="https://logodetimes.com/times/sao-paulo/logo-sao-paulo-256.png"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("TelaTime", {
              nome: "Internacional",
              facanha: "Campeão Brasileiro 1979",
              simbolo:
                "https://logodetimes.com/times/internacional/logo-internacional-256.png",
            });
          }}
        >
          <ItemLista
            nome="Internacional"
            facanha="Campeão Brasileiro 1979"
            simbolo="https://logodetimes.com/times/internacional/logo-internacional-256.png"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("TelaTime", {
              nome: "Grêmio",
              facanha: "Campeão Brasileiro 1996",
              simbolo:
                "https://logodetimes.com/times/gremio/logo-gremio-256.png",
            });
          }}
        >
          <ItemLista
            nome="Grêmio"
            facanha="Campeão Brasileiro 1996"
            simbolo="https://logodetimes.com/times/gremio/logo-gremio-256.png"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("TelaTime", {
              nome: "Fluminense",
              facanha: "Campeão Brasileiro 2012",
              simbolo:
                "https://logodetimes.com/times/fluminense/logo-fluminense-256.png",
            });
          }}
        >
          <ItemLista
            nome="Fluminense"
            facanha="Campeão Brasileiro 2012"
            simbolo="https://logodetimes.com/times/fluminense/logo-fluminense-256.png"
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
