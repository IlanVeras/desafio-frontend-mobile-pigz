import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function PigzImageLogin() {
  return (
    <View style={styles.imageDiv}>
        <Image source={require("@/assets/images/pigz-logotipo-branco.png")}/>    
    </View>
  )
}

const styles = StyleSheet.create({
    imageDiv: {
        alignItems: 'center',
        marginTop: 93,
    }
})