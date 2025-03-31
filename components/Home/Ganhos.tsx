import { View, Text, Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

export default function Ganhos() {
  return (
    <LinearGradient 
    colors={['#FF881F','#FA641E']}
    start={{x:0,y:0}}
    end={{x:1,y:0}}
    style={styles.divGanhos}
    >
      <View style={styles.divDia}>
        <Text style={styles.txtDia}>Ganhos do dia</Text>
        <Text style={styles.txtDia}>29/07</Text>
      </View>
      <View style={styles.divValores}>
        <Text style={styles.txtValores}>R$ 150</Text>
        <Image source={require('@/assets/icons/eye/eye-x1.png')}/>
      </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  divGanhos: {
    borderRadius: 16,
    padding: 16,
  },
  divDia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txtDia: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  divValores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 9,
  },

  txtValores: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  }
})