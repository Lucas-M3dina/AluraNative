import React, { useReducer, useMemo } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Estrelas from '../../../components/Estrelas'

const distanciaEmMetros = (distancia) => {
    console.log(distancia)
    return `${distancia}m`;
}

export default function ProdutorCard({nome, imagem, distancia, estrelas}) {
    //const [selecionado, setSelecionado] = useState(false)
    const [selecionado, inverterSelecao] = useReducer(
        (selecionado) => !selecionado,
        false
    );

    const distanciaTexto = useMemo(() => distanciaEmMetros(distancia), [distancia])

    return (
        <TouchableOpacity 
            onPress={inverterSelecao} 
            style={styles.card}
        >
            <Image style={styles.imagem} source={imagem} accessibilityLabel={nome}/>
            <View style={styles.informacoes}>
                <View>
                    <Text style={styles.nome}>{ nome }</Text>
                    <Estrelas 
                        quantidade={estrelas} 
                        editavel={selecionado}
                        grande={selecionado}
                    />
                </View>
                <Text style={styles.distancia}>{ distanciaTexto }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',

        // IOS
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        // Android
        elevation: 4,

    },

    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },

    informacoes: {
        flex: 1 ,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },

    nome:{
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
        color: '#000000'
    },
    
    distancia: {
        fontSize: 12,
        lineHeight: 19,
        color: '#000000'
    }
})
