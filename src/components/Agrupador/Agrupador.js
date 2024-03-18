import React from "react";
import CaixaTexto from '../CaixaTexto/CaixaTexto';
import ImageTimes from '../ImageTimes/ImageTimes.js'
import { Text, View } from "react-native";

function Agrupador(props) {
    const { styles, time, conquista } = props;
    return (
        <>
        <View style={styles} >
            <ImageTimes style={styles} time={time}/>
            <CaixaTexto ImageTimes time={time} conquista={conquista} style={{color: 'red'}} />
        </View>
        </>
    );
}

export default Agrupador;
