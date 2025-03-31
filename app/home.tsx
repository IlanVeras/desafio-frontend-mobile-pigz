import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ganhos from '@/components/Home/Ganhos'
import Entregas from '@/components/Home/Entregas'
import Nova from '@/components/Home/Nova'

export default function home() {
  return (
    <View style={styles.divHome}>
      <View>
          <Text>Visão Geral</Text>
      </View>

      <Ganhos/>

      <Entregas/>

      <Nova/>

    </View>
  )
}

const styles = StyleSheet.create({
    divHome: {
        margin: 24
    }
})