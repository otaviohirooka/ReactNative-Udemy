import React, { Component } from 'react'

import { View,
         Text,
        StyleSheet} from 'react-native'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Mult'

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.f20}>App!</Text>
        <Simples texto='texto'/>
        <ParImpar numero={8}/>
        <Inverter texto='React Native'/>
        <MegaSena numeros={6} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 40
  }
})