import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { carregaHeaderData } from '../../../service/carregaDados'
import Logo from '../../../assets/logo.png'

export default function Header() {
  const [textos, setTextos] = useState({
    boasVindas: "",
    legenda: "",
  })

  useEffect(() => {
    setTextos(carregaHeaderData());
  }, [])

  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={Logo}></Image>
      <Text style={styles.title}>{ textos.boasVindas }</Text>
      <Text style={styles.subTitle}>{ textos.legenda }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header : {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },

  logo:{
    width: 70,
    height: 28,
  },

  title:{
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  },

  subTitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3'
  }
})
