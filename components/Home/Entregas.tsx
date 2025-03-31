import { View, Text } from 'react-native'
import React from 'react'

export default function Entregas() {
  return (
    <View>
      <Text>Resumos das Entregas</Text>
      <View>
        <View>
            <Text>Aceitas</Text>
            <Text>15</Text>
        </View>

        <View>
            <Text>Rejeitadas</Text>
            <Text>5</Text>
        </View>

        <View>
            <Text>Total</Text>
            <Text>20</Text>
        </View>
      </View>
    </View>
  )
}
