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
      <View>
          <View>
              <Text>Ganhos do dia</Text>
              <Text>29/07</Text>
          </View>
          <View>
              <Text>R$ 150</Text>
              <Image/>
          </View>
      </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  divGanhos: {
    borderRadius: 16,
  }
})