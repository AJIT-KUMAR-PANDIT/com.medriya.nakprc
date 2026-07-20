import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, List, Avatar, FAB, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Medicines() {
  const router = useRouter();
  const theme = useTheme();

  const medicines = [
    { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
    { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' },
    { name: 'Atorvastatin', dosage: '20mg', frequency: 'Before bed' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Animated.View entering={FadeInDown.delay(100).duration(500)}>
          <Text variant="headlineMedium" style={{ fontWeight: 'bold', color: theme.colors.onBackground, marginBottom: 8 }}>Medicine Cabinet</Text>
          <Text variant="titleMedium" style={{ color: theme.colors.onSurfaceVariant, marginBottom: 24 }}>Manage your prescriptions.</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          <List.Section>
            {medicines.map((med, index) => (
              <List.Item
                key={index}
                title={med.name}
                titleStyle={{ fontWeight: '600' }}
                description={`${med.dosage} • ${med.frequency}`}
                left={props => <Avatar.Icon {...props} icon="pill" size={48} style={{ backgroundColor: theme.colors.secondaryContainer }} color={theme.colors.onSecondaryContainer} />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
                style={{ backgroundColor: theme.colors.surfaceVariant, marginBottom: 8, borderRadius: 16 }}
                onPress={() => {}}
              />
            ))}
          </List.Section>
        </Animated.View>
      </ScrollView>
      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primaryContainer }]}
        color={theme.colors.onPrimaryContainer}
        onPress={() => router.push('/add-medicine')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 100,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 90,
  },
});
