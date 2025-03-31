import {View, Text, TextInput, StyleSheet} from "react-native"
import React from 'react'

export default function PasswordLogin({textValue,setTextValue}:any) {
  return (
    <View>
      <Text style={styles.textLabel}>Senha</Text>
      <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setTextValue}
          placeholder="*******"
          value={textValue}
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