import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';

export default app => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF7FC'
        }}>
            <Text style={Home.txt}>Bem vindo a Pink Modas!</Text>


            <View style={Home.botoes}>
                <Pressable>
                    <Icon style={Home.Botao} name="cart-shopping" size={15} color="white" />
                </Pressable>

                <Pressable style={Home.Botao}>
                    <Icon name="user-large" size={15} color="white" />
                </Pressable>

                <Pressable style={Home.Botao}>
                     <Icon name="bag-shopping" size={15} color="white"/>
                </Pressable>
            </View>

        </View>
    )
}

const Home = StyleSheet.create(
    {
        Botao: {
            backgroundColor: "#FF71CD",
            padding: 10,
            borderRadius: 10,
            paddingLeft: 20,
            paddingRight: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 5
        },

        txt: {
            fontSize: 20,
            color: 'black'
        },

        botoes: {
            flexDirection: 'row',
            padding: 15
        }
    }
)