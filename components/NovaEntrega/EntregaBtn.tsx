import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function EntregaBtn() {
  return (
    <LinearGradient 
        colors={['#FF881F','#FA641E']}
        start={{x:0,y:0}}
        end={{x:1,y:0}}
        style={styles.divBtnEntrega}
        >
        <View style={styles.imgEntrega}>
          <Image source={require('@/assets/icons/moto/moto-x1.png')}/>
        </View>
      <View style={styles.divTxtEntrega}>
          <Text style={styles.txtEntregaBtn}>Entrega</Text>
          <Text style={styles.txtPercurso}>Percurso Total: 8Km</Text>
      </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
    divBtnEntrega: {
        flexDirection: 'row',
        borderRadius: 16,
        padding: 7,
    },
    imgEntrega: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    divTxtEntrega: {
      marginLeft: 12
    },
    txtEntregaBtn: {
      fontSize: 18,
      color: '#FFFFFF',
    },
    txtPercurso: {
      fontSize: 12,
      color: '#FFFFFF',
    }
})