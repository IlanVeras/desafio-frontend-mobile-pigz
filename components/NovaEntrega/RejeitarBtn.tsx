import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function RejeitarBtn() {
  return (
    <View style={styles.btnRejeitar}>
      <Image 
        source={require('@/assets/icons/checkout/checkout-x1.png')}
        style={styles.imgRejeitar}
      />
      <Text style={styles.txtRejeitar}>Rejeitar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  btnRejeitar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8453E',
    padding: 12,
    borderRadius: 16,
  },
  imgRejeitar: {
    marginRight: 6,
  },
  txtRejeitar: {
    fontSize: 16,
    color: '#E8453E',
    fontFamily: "Poppins-Regular", // Adicione aqui
  }
})