import { View, Text } from 'react-native'
import React from 'react'
import InputHome from './InputHome'
import MyButton from '../MyButton'

export default function Nova() {
  return (
    <View>
        <Text>Iniciar Nova Entrega</Text>
        <Text>Número de identificação</Text>
        <InputHome/>
        <Text>OK</Text>
        <MyButton  
        textValue="Escanear QrCode" 
        route="/login" 
        img={true}/>
    </View>
  )
}
