import React, { Component } from 'react'

import { Text } from 'react-native'

import Padrao from '../estilo/Padrao'

export default (props) => {
    return <Text style={Padrao.ex}>{props.texto}</Text>
}

//export default props => <Text>{props.texto}</Text>
