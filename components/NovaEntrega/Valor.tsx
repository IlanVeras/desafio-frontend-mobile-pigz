import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Valor() {
  return (
    <View style={styles.divValor}>
      <Text style={styles.txtEntrega}>Valor da Entrega</Text>
      <Text style={styles.txtValor}>R$ 13,75</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    divValor: {
        padding: 20,
    },
    txtEntrega: {
       fontSize: 14,
       color: '#707070',
       textAlign: 'center',
       fontFamily: "Poppins-Regular", // Adicione aqui
    },
    txtValor: {
        fontSize: 35,
        color: '#FA641F',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: "Poppins-Regular", // Adicione aqui
    }
})
