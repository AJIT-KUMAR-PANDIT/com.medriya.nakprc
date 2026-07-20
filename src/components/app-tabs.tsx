import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.navigate(route.name, route.params);
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }
            return null;
          }}
          getLabelText={({ route }: any) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            return label as string;
          }}
        />
      )}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "view-dashboard" : "view-dashboard-outline"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="medicines"
        options={{
          title: 'Medicines',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "pill" : "pill"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Assistant',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "message-text" : "message-text-outline"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? "account" : "account-outline"} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
