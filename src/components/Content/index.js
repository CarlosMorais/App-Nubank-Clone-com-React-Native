//import React in our code
import React from 'react';
import Menu from '~/components/Menu'
import Tabs from '~/components/Tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
//import all the components we are going to use
import { StyleSheet, View, Text, Dimensions, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler'

export default function Content() {
    let offset = 0;
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true },
    );

    function onHandlerStateChanged(event) {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            if (translationY >= 100) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 380 : 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                offset = opened ? 380 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Menu translateY={translateY} />
                    <PanGestureHandler
                        onGestureEvent={animatedEvent}
                        onHandlerStateChange={onHandlerStateChanged}>
                        <Animated.View style={[styles.card,
                        {
                            transform: [{
                                translateY: translateY.interpolate({
                                    inputRange: [-350, 0, 380],
                                    outputRange: [-50, 0, 380],
                                    extrapolate: 'clamp'
                                }),
                            }]
                        }]}>
                            <View style={styles.cardHeader}>
                                <Icon name="attach-money" size={28} color="#777" />
                                <Icon name="visibility-off" size={28} color="#777" />
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.title}>
                                    Saldo disponível
                        </Text>
                                <Text style={styles.description}>
                                    R$ 550.978,35
                        </Text>
                            </View>
                            <View style={styles.cardFooter}>
                                <Text style={styles.anotation}>
                                    Transferência de R$ 20,00 recebida de Albert Einstein
                        </Text>
                            </View>
                        </Animated.View>
                    </PanGestureHandler>
                </View>                
            </View>
            <Tabs translateY={translateY} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 400,
        minHeight: ((Dimensions.get('window').height) * 0.3),
        zIndex: 5,
        flexDirection: 'row'
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 4,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 20,
        marginRight: 0,
        height: '100%',
        width: ((Dimensions.get('window').width) - 40),
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30
    },
    cardContent: {
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 30,
        paddingRight: 30
    },
    cardFooter: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#eee',
        borderRadius: 4
    },
    title: {
        fontSize: 13,
        color: '#999'
    },
    description: {
        fontSize: 32,
        marginTop: 3,
        color: '#333'

    },
    anotation: {
        fontSize: 12,
        color: '#333'
    }
}); 