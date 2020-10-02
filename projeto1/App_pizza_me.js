import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput } from 'react-native';
import Button from './Button';


const App = () => {

  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const aumentarContador2 = () => {
    setContador2(contador2 + 1);
  };

  const zerarContador = () => {
    if (contador === 0) {
      Alert.alert('Erro', 'Seu contador já está zerado!');
    }
    setContador(0);
    setContador2(0);
  };

  const resultado = () => {
    if (contador > contador2) {
      Alert.alert('Resultado', `${player1} Venceu`);
    } if (contador === contador2) {
      Alert.alert('Resultado', 'Jogo Empatado');
    }
    if (contador < contador2) {
      Alert.alert('Resultado', `${player2} Venceu`);
    }
    setContador(0);
    setContador2(0);
    setPlayer1('Player 1');
    setPlayer2('Player 2');
  };

  return (
    <>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>Campeonato de Pizza</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.display}>{player1}</Text>
        <Text style={styles.display}>{player2}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.display}>{contador}</Text>
        <Text style={styles.display}>{contador2}</Text>
      </View>
      <View style={styles.buttonRowContainer}>
        <Button
          buttonStyle={{ backgroundColor: '#269e3e' }}
          title="+ 1 Fatia"
          onPress={aumentarContador}
        />

        <Button
          buttonStyle={{ backgroundColor: '#5742f5' }}
          title="+ 1 Fatia"
          onPress={aumentarContador2}
        />
      </View>
      <Button
        buttonStyle={{ backgroundColor: '#45acd1' }}
        title="Zerar Placar"
        onPress={zerarContador}
      />
      <Button
        buttonStyle={{ backgroundColor: '#f54278' }}
        title="Quem Comeu mais Pizza"
        onPress={resultado}
      />
      <View style={{ display: "flex", justifyContent: 'space-around', alignSelf: 'center', marginTop: 20 }}>
        <Text>Digite nome do Player 1</Text>
        <TextInput
          style={styles.input}
          placeholder="Player 1"
          onChangeText={(value) => setPlayer1(value)}></TextInput>
        <Text>Digite nome do Player 2</Text>
        <TextInput
         style={styles.input}
          placeholder="Player 2"
           onChangeText={(value) => setPlayer2(value)}></TextInput>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#444',
    padding: 8,
    margin: 20,
    width: 300,
    marginTop: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  containerTitle: {
    display: "flex",
    backgroundColor: '#fadbc5',
    padding: 20,
  },
  textTitle: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '800',
    color: '#424242',
  },
  containerInput: {
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'space-around'
  },
  display: {
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#424242',
  },
  buttonRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;