import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
//import all the components we are going to use
import { StyleSheet, View, Text, ScrollView, Animated } from 'react-native';

export default function Tabs({ translateY }) {
    return (
        <Animated.View style={[styles.container, {
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp',
                }),
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0.1],
                extrapolate: 'clamp',
            }),
        }]}>
            <ScrollView contentContainerStyle={styles.tabsContainer} horizontal={true} showHorizontalIndicator={false} >
                <View style={styles.tabItem}>
                    <Icon name='person-add' size={20} color='#fff' />
                    <Text style={styles.text}>Indicar Amigos</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name='chat-bubble-outline' size={20} color='#fff' />
                    <Text style={styles.text}>Cobrar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name='arrow-downward' size={20} color='#fff' />
                    <Text style={styles.text}>Depositar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name='arrow-upward' size={20} color='#fff' />
                    <Text style={styles.text}>Transferir</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name='lock' size={20} color='#fff' />
                    <Text style={styles.text}>Bloquear Cartão</Text>
                </View>
            </ScrollView>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        marginTop: 20,
        paddingRight: 0,
        paddingBottom: 30
    },
    tabsContainer: {
        paddingLeft: 10,
        paddingRight: 20
    },
    tabItem: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 3,
        marginLeft: 10,
        padding: 10,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 13,
        color: '#fff'
    }
}); 