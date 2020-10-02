import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DrawerNavigator from '../../navigators/drawerNavigator'


const Welcome = ({ navigation }) => {

    const [nome, setNome] = useState('')

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            console.log("oi")
            const json = await AsyncStorage.getItem('@storage_Key');
            const jsonValue = JSON.parse(json);
            console.log(jsonValue)
            if (json !== null) {
                setNome(jsonValue.nome)
                // value stored    
            }
        } catch (e) {
            //error
        }
    }

    const goToPizzaScreen = () => {
        navigation.navigate('Root', {
            screen: 'PizzaScreen', params: {
                screen: 'PizzaScreen',
            }
        });
    };

    const goToTemakiScreen = () => {
        navigation.navigate('Root', {
            screen: 'TemakiScreen', params: {
                screen: 'TemakiScreen',
            }
        });

    };

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View>
                <View>
                    <Text style={styles.text}>Bem Vindo! {nome}</Text>
                    <Text style={styles.text}>Escolha o tipo de Rodízio</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>

                    <TouchableOpacity
                        onPress={goToPizzaScreen}
                        style={{
                            marginHorizontal: 20,
                            height: 150,
                            borderRadius: 5,
                            padding: 5,
                        }}>

                        <Image source={require('../../../src/assets/images/pizza_home.png')}
                            style={{ width: 120, height: 120, borderWidth: 1 }}
                            resizeMode='contain' />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={goToTemakiScreen}
                        style={{
                            marginHorizontal: 20,
                            height: 150,
                            borderRadius: 5,
                            padding: 5,
                        }}>

                        <Image source={require('../../../src/assets/images/temaki.jpg')}
                            style={{ width: 120, height: 120, borderWidth: 1 }}
                            resizeMode='contain' />
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'

    },
    text: {
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 30,
        color: '#fff'
    },
})

export default Welcome;