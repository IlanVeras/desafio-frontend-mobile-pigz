import { useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import React from "react";

export default function Index() {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      // router.replace("/login");
      router.replace("/home")
    }, 0); // Usa um pequeno delay para evitar o erro
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
  return null
}
