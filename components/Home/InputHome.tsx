import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

export default function InputHome() {
  return (
    <View style={styles.divInput}>
      <TextInput placeholder='teste'/>
    </View>
  )
}

const styles = StyleSheet.create({
  divInput: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#FF671F',
    flex: 1, // O input ocupa o espaço disponível
    marginRight: 6, // Espaço entre o input e o botão
    paddingHorizontal: 10, // Ajusta a área interna do input
    paddingVertical: 8, // Ajusta a altura do input
  }
});
