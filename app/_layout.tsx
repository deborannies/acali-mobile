import { Stack } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="project/[id]"
        options={{
          title: 'Detalhes do Projeto',
          headerBackTitle: 'Voltar',
        }}
      />
    </Stack>
  );
}