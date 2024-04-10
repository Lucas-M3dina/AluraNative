import React from 'react';
import Header from './components/Header'
import Produtores from './components/Produtores'

export default function Home() {
  return <>
    <Produtores header={Header}/>
  </> ;
}