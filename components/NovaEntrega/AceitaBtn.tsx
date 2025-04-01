import React from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function AceitaBtn() {
  return (
    <LinearGradient 
      colors={['#FF881F','#FA641E']}
      start={{x:0,y:0}}
      end={{x:1,y:0}}
      style={styles.aceitaBtn}
    >
      <Image 
      source={require("@/assets/icons/check/check-x1.png")}
      style={styles.imgBtnAceitar}
      />
      <Text style={styles.txtAceitar}>Aceitar</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  aceitaBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    marginBottom: 15,
  },
  imgBtnAceitar: {
    marginRight: 6,
  },
  txtAceitar: {
    fontSize: 16,
    color: '#FFFFFF'
  }
})
