import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from '../../components/Button';

const TemakiScreen = ({route}) => {
  const [mensagem, setMensagem] = useState('');
  const [competidores, setCompetidores] = useState();
  const [competidor, setCompetidor] = useState('');

  const mensagens = [
    'mensagem 1',
    'mensagem 2',
    'mensagem 3',
    'mensagem 4',
    'mensagem 5',
  ];

  useEffect(() => {
    setCompetidores([
      {nome: 'Daniel', pizzas: 2},
      {nome: 'Diogo', pizzas: 1},
      {nome: 'João', pizzas: 0},
    ]);
  }, []);

  useEffect(() => {
    const numeroAleatorio = Math.floor(Math.random() * 5);
    const mensagemEscolhida = mensagens[numeroAleatorio];
    setMensagem(mensagemEscolhida);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const adicionarPizzas = (item) => {
    const newCompetidores = competidores.map((itemCompetidor) => {
      if (itemCompetidor.nome === item.nome) {
        itemCompetidor.pizzas = itemCompetidor.pizzas + 1;
      }
      return itemCompetidor;
    });
    setCompetidores(newCompetidores);
  };

  const adicionarCompetidor = () => {
    const competidorObj = {nome: competidor, pizzas: 0};
    setCompetidores([...competidores, competidorObj]);
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={{
          uri:
            'https://media-cdn.tripadvisor.com/media/photo-s/0d/99/1e/d3/pizza-marguerita.jpg',
        }}
        style={{
          resizeMode: 'cover',
          height: 200,
        }}
      />
      <View style={{flex: 1, marginTop: 20, backgroundColor:'#C70007'}}>
        <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 18}}>
          {mensagem}
        </Text>
        {
          <FlatList
            data={competidores}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemNome}>{item.nome}</Text>
                <View style={styles.itemPizzas}>
                  <Text style={styles.itemPizzasText}>{item.pizzas}</Text>
                  <Button
                    buttonStyle={styles.itemBtnAdd}
                    title="+"
                    onPress={() => adicionarPizzas(item)}
                  />
                </View>
              </View>
            )}
            keyExtractor={(item) => item.nome}
          />
        }
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 10,
              marginHorizontal: 20,
              flex: 1,
            }}
            onChangeText={setCompetidor}
            value={competidor}
          />
          <Button
            buttonStyle={{marginTop: 0, marginBottom: 10}}
            title="+"
            onPress={adicionarCompetidor}
          />
        </View>
      </View>
    </View>
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    justifyContent: 'space-between',
  },
  itemNome: {
    fontSize: 18,
    marginLeft: 10,
  },
  itemPizzas: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPizzasText: {fontSize: 18},
  itemBtnAdd: {
    borderRadius: 100,
    padding: 10,
    marginTop: 0,
    marginHorizontal: 0,
    marginLeft: 15,
  },
});

export default TemakiScreen;