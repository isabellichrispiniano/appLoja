import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './components/Home';
import Compras from './components/Compras';
import Carrinho from './components/Carrinho';

const Drawer = createDrawerNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex:1}}>
               <NavigationContainer>
                <Drawer.Navigator>
                   <Drawer.Screen name='Home' component={Home} />
                   <Drawer.Screen name='Meu carrinho' component={Carrinho} />
                   <Drawer.Screen name='Minhas compras' component={Compras} />
                </Drawer.Navigator>
               </NavigationContainer>
        </SafeAreaView>
    )
}