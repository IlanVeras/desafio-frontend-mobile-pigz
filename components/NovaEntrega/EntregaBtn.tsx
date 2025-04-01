import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function EntregaBtn() {
  return (
    <View style={styles.divBtnEntrega}>
        <Image source={require('@/assets/icons/moto/moto-x1.png')}/>
      <View>
          <Text>Entrega</Text>
          <Text>Percurso Total: 8Km</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    divBtnEntrega: {
        flexDirection: 'row'
    }
})