import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'Camus', nota: 9.5},
    { id: 2, nome: 'Mu', nota: 9.6},
    { id: 3, nome: 'Saga', nota: 0.5},
    { id: 4, nome: 'Shura', nota: 6.5},
    { id: 5, nome: 'Aiolos', nota: 6.5},
    { id: 6, nome: 'Aiolia', nota: 9.0},
    { id: 7, nome: 'Shaka', nota: 9.0},
    { id: 8, nome: 'Afrodite', nota: 5.5},
    { id: 9, nome: 'Aldebaran', nota: 8.0},
    { id: 10, nome: 'Mascara da Morte', nota: 0.5},
    { id: 11, nome: 'Milo', nota: 4.5},
    { id: 12, nome: 'Dokho', nota: 6.5},
    { id: 13, nome: 'Camus', nota: 9.5},
    { id: 14, nome: 'Shura', nota: 6.5},
    { id: 15, nome: 'Aiolos', nota: 6.5},
    { id: 16, nome: 'Aiolia', nota: 9.0},
    { id: 17, nome: 'Shaka', nota: 9.0},
    { id: 18, nome: 'Afrodite', nota: 5.5},
    { id: 19, nome: 'Aldebaran', nota: 8.0},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    flexDirection: 'row',
    alignItens: 'center',
    justifyContent: 'space-around'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}