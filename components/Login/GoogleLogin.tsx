import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function GoogleLogin() {
  return (
    <View style={styles.googleDiv}>
      <Image source={require("@/assets/icons/google/logo_googleg_48dp.png")}/>
      <Text style={styles.googleTxt}>Continuar com o Google</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    googleDiv: {
        flexDirection: 'row',
        padding: 13,
        borderWidth: 1,
        borderColor: '#676767',
        marginBottom: 90,
        borderRadius: 16,
    },
    googleTxt: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
    }
})