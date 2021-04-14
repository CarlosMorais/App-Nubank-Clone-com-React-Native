import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ScrollView, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
// npm install react-native-svg --save
// npm install react-native-qrcode-svg --save
import QRCode from 'react-native-qrcode-svg'

export default function Menu({ translateY }) {
    return (
        <Animated.ScrollView style={[styles.container,
        {
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
            }),
        }]} contentContainerStyle={{
            alignItems: 'stretch',
            paddingBottom: 20
        }}>
            <View style={styles.code}>
                <QRCode
                    value="https://google.com"
                    size={80}
                    bgColor="#fff"
                    fgColor="#8B10AE" />
            </View>
            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <Text style={styles.navText}>Me ajuda</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <Text style={styles.navText}>Perfil</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="credit-card" size={20} color="#fff" />
                    <Text style={styles.navText}>Configurar cartão</Text>
                </View>
                <View style={[styles.navItem]}>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <Text style={styles.navText}>Configurações do app</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.signOutButton}
                onPress={{}}>
                <Text style={styles.signOutButtonText}>SAIR DO APP</Text>
            </TouchableOpacity>
        </Animated.ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: ((Dimensions.get('window').width) - 60),
        minHeight: 400,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 30,
        marginRight: 30
    },
    code: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        alignSelf: 'center',
    },
    nav: {
        marginTop: 30,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(255,255,255,0.3)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255,255,255,0.3)'
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(255,255,255,0.5)'
    },
    navText: {
        fontSize: 15,
        color: '#fff',
        marginLeft: 20
    },
    signOutButton: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255,255,255,0.8)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 15
    },
    signOutButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
}); 