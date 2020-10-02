import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const App = () => {

  const [contador, setContador] = useState(0);
  const [frase, setFrase] = useState('');

  const frases = ["A felicida so e real quando compartilhada",
    "O senhor é meu pastor e nada faltara",
    "Amigo de todos, Amigo de ninguem",
    "Em terra de cego quem tem um olho é rei",
    "Há pessoas que caminham pela floresta e so encherga LENHA"]

  useEffect(() => {
    const numero = Math.floor(Math.random() * 5)
    setFrase(frases[numero])
  }, [frases])

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const diminuirContador = () => {
    if (contador === 0) {
      Alert.alert(
        'Erro',
        'Não é possível registrar números menores que 0 (zero)',
      );
      return;
    }
    setContador(contador - 1);
  };

  const zerarContador = () => {
    if (contador === 0) {
      Alert.alert('Erro', 'Seu contador já está zerado!');
    }
    setContador(0);
  };

  return (
    <>
    <Text style={{
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:20,
  }}>{frase}</Text>
      <Text style={styles.display}>{contador}</Text>
      <View style={styles.buttonRowContainer}>
        <Button
          buttonStyle={{ backgroundColor: '#269e3e' }}
          title="Aumentar"
          onPress={aumentarContador}
        />
        <Button
          buttonStyle={{ backgroundColor: '#c20000' }}
          title="Diminuir"
          onPress={diminuirContador}
        />
      </View>
      <Button
        buttonStyle={{ backgroundColor: '#45acd1' }}
        title="Zerar"
        onPress={zerarContador}
      />
    </>
  );
};

const styles = StyleSheet.create({
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