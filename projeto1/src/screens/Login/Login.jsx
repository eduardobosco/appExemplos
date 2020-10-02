import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Login = () => {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    const storeData = async () => {

        try {
            if (nome == "Roberto" && senha == "123") {
                const jsonValue = {
                    nome: nome,
                    senha: senha,
                }
                Alert.alert('Mensagem', 'Acesso Permitido')
                await AsyncStorage.setItem('@storage_Key', JSON.stringify(jsonValue))

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Welcome' }],
                });

            } else {
                Alert.alert('Erro', 'Usuário ou senha Incorreta')
            }
        } catch (e) {
            //saving error
        }
    }

    const getData = async () => {
        try {
            const json = await AsyncStorage.getItem('@storage_Key');
            const jsonValue = JSON.parse(json);
            console.log(json)
            if (json !== null) {
                // value stored    
            }
        } catch (e) {
            //error
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%' }}>
                <Text style={styles.text}>Área de Acesso</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={value => setNome(value)}
                    placeholder='Login' />

                <TextInput
                    style={styles.input}
                    value={senha}
                    secureTextEntry={true}
                    onChangeText={value => setSenha(value)}
                    placeholder='Senha' />

                <TouchableOpacity style={styles.btn} onPress={storeData}>
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={getData}>
                    <Text style={styles.btnText}>Mostrar Informações</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        padding: 20,
    },
    text: {
        alignSelf: 'center',
        fontSize: 24,
        marginBottom: 20,

    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 5,
        marginVertical: 10,
        fontSize: 16,
    },
    btn: {
        borderRadius: 10,
        backgroundColor: "#000",
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,

    },
});

export default Login;

