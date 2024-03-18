import React from "react";
import { Text, View } from "react-native";
import Estilo from "./Estilo";
import { Image } from "react-native-web";
import ImageTimes from "../ImageTimes/ImageTimes";

function CaixaTexto(props) {
    const { time, conquista } = props;
    let estilo = {
        Trindade: {
            fontSize: 30,
            color: 'black',
            backgroundColor: '#FFFFFF', // Corrigido para '#000000'
            borderWidth: 2,
            padding: 16,
            borderRadius: 16,
            borderStyle: 'dotted',
            borderColor: 'black',
        },
        Chapecoense: {
            fontSize: 30,
            color: 'black',
            backgroundColor: '#FFFFF', // Corrigido para '#000000'
            borderWidth: 2,
            padding: 16,
            borderRadius: 16,
            borderStyle: 'dotted',
            borderColor: 'black',
        }
    }
    return (
        <View>
            <Text style={estilo[time]}>{props.time}!{'\n'}{props.conquista}</Text>
        </View>
    );
}

export default CaixaTexto;
