import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import ProdutorCard from '../components/ProdutorCard';
import useProdutores from "../../../hooks/useProdutores.js";

export default function Produtores({header: HeaderPage}) {
    

    const [titulo, lista] = useProdutores();

    const Header = () => {
        return <>
            <HeaderPage/>
            <Text style={styles.title}>{ titulo }</Text>
        </> 
    }

    return (
        <FlatList
        data={lista}
        keyExtractor={({nome}) => nome}
        renderItem={({item}) => <ProdutorCard {...item} />}
        ListHeaderComponent={Header}
        />
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})
