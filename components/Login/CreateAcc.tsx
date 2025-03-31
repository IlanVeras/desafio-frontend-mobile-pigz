import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function CreateAcc() {
  return (
    <View style={styles.createAccText}>
      <Text>Não tem uma conta? </Text> <Text style={styles.accTextLink}>Criar Agora!</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    createAccText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginTop: 20,
    },
    accTextLink: {
        color: "#FA641E"
    }
})