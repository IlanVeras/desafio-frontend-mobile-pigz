import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function EntregaDetails() {
  return (
    <View style={styles.divDetails}>
      <View style={styles.containerDetails}>
        <Text style={styles.txtEstimado}>Tempo Estimado</Text>
        <Text style={styles.txtEntrega}>30 Min</Text>
      </View>

      <View style={styles.containerDetails}>
        <Text style={styles.txtEstimado}>Número de ID</Text>
        <Text style={styles.txtEntrega}>#6789</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    divDetails: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#dbdbdb',
        padding: 13,
    },
    containerDetails: {
    },
    txtEstimado: {
        fontSize: 14,
        color: '#707070',
        textAlign: 'center',
        fontFamily: "Poppins-Regular", // Adicione aqui
    },
    txtEntrega: {
        fontSize: 20,
        color: '#FA641F',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: "Poppins-Regular", // Adicione aqui
    }
})