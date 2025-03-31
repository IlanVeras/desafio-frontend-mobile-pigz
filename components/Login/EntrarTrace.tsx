import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function EntrarTrace() {
  return (
        <View style={styles.entrarDiv}>
            <Text style={styles.entrarTxt}>Entrar com</Text>
            <View style={styles.entrarTrace}></View>
        </View>
  )
}

const styles = StyleSheet.create({
    entrarDiv: {
        flexDirection: 'row',
        alignItems: 'center', // Alinha o texto e o traço verticalmente
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 24,
    },
    entrarTxt: {
        fontSize: 13,
        fontWeight: 'bold',
        marginRight: 8,
    },
    entrarTrace: {
        flex: 1,
        height: 1,
        backgroundColor: '#707070',
    }
})
