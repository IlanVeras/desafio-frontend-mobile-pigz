import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Entregas() {
  return (
    <View style={styles.divEntregasShadow}>
      <View style={styles.divEntregas}>
        <Text style={styles.txtEntregas}>Resumos das Entregas</Text>
        <View style={styles.divDados}>
          <View style={styles.divDadoUnico}>
              <Text style={styles.txtDadoUnico}>Aceitas</Text>
              <Text style={styles.numDadoUnico}>15</Text>
          </View>
          <View style={styles.divDadoUnico}>
              <Text style={styles.txtDadoUnico}>Rejeitadas</Text>
              <Text style={styles.numDadoUnico}>5</Text>
          </View>
          <View style={styles.divDadoUnico}>
              <Text style={styles.txtDadoUnico}>Total</Text>
              <Text style={styles.numDadoUnico}>20</Text>
          </View>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  divEntregasShadow: {
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.21,
    shadowRadius: 6,
    elevation: 9,
    marginTop: 32,
  },

  divEntregas: {
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },
  txtEntregas: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  divDados: {
    flexDirection: 'row',
    marginTop: 18,
  },
  divDadoUnico: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: "#F0F0F0",
    borderRadius: 16,
    marginHorizontal: 6,
  },
  txtDadoUnico: {
    fontSize: 16,
    color: '#9F9F9F',
  },
  numDadoUnico: {
    fontSize: 40,
    color: '#333333',
  }
})