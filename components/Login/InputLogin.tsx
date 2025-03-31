import {View, Text, TextInput, StyleSheet} from "react-native"
import React from 'react'

export default function InputLogin({textValue,setTextValue, inputType} : any) {
  const [text,setText] = React.useState('')
  return (
    <View>
      <Text style={styles.textLabel}>Email ou Telefone</Text>
      <TextInput
          style={styles.input}
          placeholder="example@pigz.com.br"
          onChangeText={setText}
          value={text}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    color: '#4B4B4B',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#FA641E"
  },
  textLabel: {
    marginTop: 16,
    marginBottom: 6,
  }
})