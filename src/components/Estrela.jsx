import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import EstrelaAtiva from '../assets/estrela.png'
import EstrelaDesativada from '../assets/estrelaCinza.png'

export default function Estrela({
    onPress, 
    desabilitada = true, 
    preenchida, 
    grande = false
}) {

    const styles = stylesFunc(grande)

    const GetImagem = () => {
        if (preenchida) {
            return EstrelaAtiva
        }
        return EstrelaDesativada
    }

    return (
        <TouchableOpacity 
        onPress={onPress}
        disabled={desabilitada}
        >
            <Image style={styles.estrela} source={GetImagem()}/> 
        </TouchableOpacity>
    )
}

const stylesFunc = (grande) => StyleSheet.create({
    estrela:{
        width: grande ? 25 : 12,
        height: grande ? 25 : 12,
        marginRight: 2
    }
})
