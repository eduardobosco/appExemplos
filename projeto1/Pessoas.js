import React from 'react';
import { View, Text } from 'react-native';


const Pessoas = ({nome, idade}) => {
        return(
        <View style={{backgroundColor:'#29bbff', marginVertical:10, padding:10}}>
            <Text>Meu nome é: {nome} e tenho: {idade} anos</Text>
        </View>
        );
    }


export default Pessoas