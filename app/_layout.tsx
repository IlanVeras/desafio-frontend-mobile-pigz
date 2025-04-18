import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)/_layout" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
