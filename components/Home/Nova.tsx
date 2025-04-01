import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InputHome from './InputHome'
import MyButton from '../MyButton'

export default function Nova() {
  return (
    <View style={styles.divShadowNova}>
        <Text style={styles.txtNova1}>Iniciar Nova Entrega</Text>
        <Text style={styles.txtNova2}>Número de identificação</Text>
        <View style={styles.divInputOk}>
          <InputHome/>
          <Text style={styles.btnOk}>OK</Text>
        </View>
        <MyButton  
        textValue="Escanear QrCode" 
        route="/login" 
        img={true}/>
    </View>
  )
}


const styles = StyleSheet.create({
  divShadowNova: {
    shadowColor: "#00000029",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.21,
    shadowRadius: 6,
    elevation: 9,
    marginTop: 32,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
  },
  txtNova1: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
  txtNova2: {
    fontSize: 12,
    color: '#707070',
    marginTop: 8,
    marginBottom: 8,
  },
  divInputOk: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 18,
  },
  btnOk: {
    backgroundColor: '#FF671F',
    borderRadius: 8, 
    padding: 16,
    color: '#FFFFFF',
    fontSize: 17,
  }
})