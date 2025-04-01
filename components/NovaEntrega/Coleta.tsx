import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function Coleta() {
  return (
    <View style={styles.divColeta}>
      <View>
          <Text style={styles.headerColeta}>Coleta</Text>
          <Text style={styles.pColeta}>Restaurante Recanto da Peixada</Text>
          <Text style={styles.pColeta}>Distância: 2Km</Text>
      </View>

      <View>
        <Text style={styles.headerColeta}>Entrega</Text>
        <Text style={styles.pColeta}>Av: Cabo dos Soldados - Caranã</Text>
        <Text style={styles.pColeta}>Distância: 6Km</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  divColeta: {
    margin: 24,
  },

  headerColeta: {
    fontSize: 18,
    color: '#FA641F'
  },

  pColeta: {
    fontSize: 14,
    color: '#707070'
  }
})
