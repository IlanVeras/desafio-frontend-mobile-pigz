import { View } from "react-native";
import { SvgUri } from "react-native-svg";

export default function PigzLogo() {
  return (
    <View>
      <SvgUri
        width="100" // ou qualquer tamanho que você queira
        height="100"
        uri={require('../assets/images/pigz-logotipo-branco.svg')}
      />
    </View>
  );
}
