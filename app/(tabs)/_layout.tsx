import { Tabs } from "expo-router";
import { Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import React from "react";

export default function TabsLayout() {
  const [fontsLoaded,setFontsLoaded] = useFonts({
    'Poppins-Regular': require('@/assets/fonts/Poppins/Poppins-Regular.ttf')
  })

  if(!fontsLoaded){
    return <Text>Loading. . .</Text>
  }

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
