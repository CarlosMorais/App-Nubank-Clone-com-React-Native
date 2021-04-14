//import React in our code
import React from 'react';

import logo from '~/assets/Nubank_Logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
//import all the components we are going to use
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={[styles.top, {flexDirection: 'column'}]}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Image style={styles.logo} source={logo}></Image>
                    <Text style={styles.title}>Luiz Carlos</Text>
                </View>
                <Icon name='keyboard-arrow-down' size={20} color='#fff' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        paddingRight: 0,
        paddingBottom: 30,
        maxHeight: 130
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    logo: {

    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8
    }
}); 