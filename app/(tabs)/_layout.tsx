import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />  
      <Tabs.Screen
        name="paso-a-paso"
        options={{
          title: 'Guia',
          tabBarIcon: ({ color }) => <Ionicons name="footsteps-sharp" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="calidad-senal"
        options={{
          title: 'señal',
          tabBarIcon: ({ color }) => <MaterialIcons name="signal-wifi-0-bar" size={24} color="black" />,
        }}
      />  
      {/* 2. Red Doméstica */}
      <Tabs.Screen
        name="red-domestica"
        options={{
          title: 'Mi Red',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="web-sync" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-wrench" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
