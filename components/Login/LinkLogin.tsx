import { Text, TouchableOpacity, Linking, StyleSheet} from 'react-native'
import React from 'react'

export default function LinkLogin({textValue} : any) {
  return (
    <TouchableOpacity>
      <Text style={styles.linkLogin}>{textValue}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  linkLogin: {
    marginTop: 24,
    marginBottom: 24,
  }
})
