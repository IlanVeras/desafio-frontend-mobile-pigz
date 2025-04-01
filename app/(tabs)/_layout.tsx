import { Tabs } from "expo-router";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

export default function TabsLayout() {
  return (
    <Tabs 
    screenOptions={{ 
      headerShown: false ,
      tabBarActiveTintColor: "#FA641E", // Cor da aba selecionada
      tabBarInactiveTintColor: "gray" // Cor da aba não selecionada
      }}>
      <Tabs.Screen 
        name="relatorios" 
        options={{ 
          title: "Relatórios",
          tabBarIcon: ({size}) => (
            <Image
              source={require('@/assets/icons/relatorio/relatorio-x1.png')}
              style={{width: size, height: size}}
            />
          )
        }} 
      />
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: "Visão geral" ,
          tabBarIcon: ({size}) => (
            <Image
              source={require("@/assets/icons/home/home-x1.png")}
              style={{ width: size, height: size}}
            />
          )
        }} 
      />
      <Tabs.Screen name="perfil" 
        options={{ 
          title: "Perfil" ,
          tabBarIcon: ({size}) => (
            <Image
              source={require("@/assets/icons/perfil/perfil-x1.png")}
            />
          )
        }} 
      />
    </Tabs>
  );
}
