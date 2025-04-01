import HeaderBack from '@/components/HeaderBack'
import AceitaBtn from '@/components/NovaEntrega/AceitaBtn'
import Coleta from '@/components/NovaEntrega/Coleta'
import EntregaBtn from '@/components/NovaEntrega/EntregaBtn'
import EntregaDetails from '@/components/NovaEntrega/EntregaDetails'
import RejeitarBtn from '@/components/NovaEntrega/RejeitarBtn'
import Valor from '@/components/NovaEntrega/Valor'
import React from 'react'
import { View, Text } from 'react-native'


export default function novaEntrega() {
  return (
    <View>
       <HeaderBack textValue={'Nova Entrega'}/>
        <EntregaDetails/>
        <Valor/>
        <EntregaBtn/>
        <Coleta/>
        <AceitaBtn/>
        <RejeitarBtn/>
    </View>
  )
}
