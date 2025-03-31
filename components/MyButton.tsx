import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "react-native-svg";
import React from "react";

export default function MyButton({ textValue }: any) {
  const handlePress = () => {
    console.log("Botão pressionado!");
  };

  return (
    <TouchableOpacity style={styles.myButton} onPress={handlePress}>
      <Text style={styles.buttonText}>{textValue}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  myButton: {
    backgroundColor: "#FA641E", // Cor de fundo
    paddingVertical: 10, // Espaçamento vertical
    paddingHorizontal: 20, // Espaçamento horizontal
    borderRadius: 16, // Borda arredondada
    alignItems: "center", // Alinhar o texto no centro
  },
  buttonText: {
    color: "#fff", // Cor do texto
    fontSize: 16, // Tamanho da fonte
    padding: 3,
    fontWeight: "bold", // Negrito
  },
});
