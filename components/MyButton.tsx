import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";

export default function MyButton({ textValue, route, img }: any) {
  const router = useRouter()
  const handlePress = () => {
    router.push(route)
  };

  if(img){
    return(
      <LinearGradient
        colors={['#FF881F','#FA641E']}
        start={{x:0,y:0}}
        end={{x:1,y:0}}
        style={styles.divButton}
      >
        <TouchableOpacity style={styles.myButtonImg} onPress={handlePress}>
          <Image source={require("@/assets/icons/qr/QR-x1.png")}/>
          <Text style={styles.buttonTextImg}>{textValue}</Text>
        </TouchableOpacity>
      </LinearGradient>
    )
  }

  return (
    <LinearGradient
      colors={['#FF881F','#FA641E']}
      start={{x:0,y:0}}
      end={{x:1,y:0}}
      style={styles.divButton}
    >
      <TouchableOpacity style={styles.myButton} onPress={handlePress}>
        <Text style={styles.buttonText}>{textValue}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  divButton: {
    borderRadius: 16,
  },
  myButtonImg: {
    flexDirection: 'row',
    paddingVertical: 10, // Espaçamento vertical
    paddingHorizontal: 20, // Espaçamento horizontal
    borderRadius: 16, // Borda arredondada
    alignItems: "center", // Alinhar o texto no centro
  },
  buttonTextImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: "#fff", // Cor do texto
    fontSize: 16, // Tamanho da fonte
    padding: 3,
    fontWeight: "bold", // Negrito
  },


  myButton: {
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
