import { Tabs } from "expo-router";
import { Image, Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import React from "react";

export default function TabsLayout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#FA641E" />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FA641E",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="relatorios"
        options={{
          title: "Relatórios",
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("@/assets/icons/relatorio/relatorio-x1.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Visão geral",
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("@/assets/icons/home/home-x1.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("@/assets/icons/perfil/perfil-x1.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}