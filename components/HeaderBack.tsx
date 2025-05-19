import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function HeaderBack({textValue}:any) {
    const router = useRouter()
  return (
    <View style={styles.headerBack}>
      <TouchableOpacity onPress={() => router.push('/login')}>
          <Image source={require('@/assets/icons/arrowBack/arrow_back_black_24dp.png')}/>
      </TouchableOpacity>
      <Text style={styles.textHeader}>{textValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerBack: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16,
    },
    textHeader: {
        flex: 1,
        fontSize: 18,
        color: '#222222',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
})