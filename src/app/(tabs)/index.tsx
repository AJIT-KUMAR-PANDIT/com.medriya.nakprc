import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Avatar, IconButton, useTheme } from 'react-native-paper';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Dashboard() {
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(100).duration(500)} style={styles.headerContainer}>
        <View style={styles.headerText}>
          <Text variant="headlineMedium" style={{ fontWeight: 'bold', color: theme.colors.onBackground }}>Good Morning,</Text>
          <Text variant="headlineMedium" style={{ fontWeight: 'bold', color: theme.colors.primary }}>User</Text>
          <Text variant="titleMedium" style={{ color: theme.colors.onSurfaceVariant, marginTop: 4 }}>Your health at a glance.</Text>
        </View>
        <Avatar.Image size={56} source={{ uri: 'https://i.pravatar.cc/150?img=68' }} />
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).duration(500)}>
        <Card style={styles.card} mode="elevated" onPress={() => {}}>
          <Card.Title
            title="Today's Status"
            titleVariant="titleLarge"
            left={(props) => <Avatar.Icon {...props} icon="heart-pulse" style={{ backgroundColor: theme.colors.primaryContainer }} color={theme.colors.onPrimaryContainer} />}
          />
          <Card.Content>
            <Text variant="bodyLarge" style={{ color: theme.colors.onSurface }}>All medicines taken</Text>
          </Card.Content>
        </Card>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <Card style={styles.card} mode="elevated" onPress={() => {}}>
          <Card.Title
            title="Next Reminder"
            titleVariant="titleLarge"
            left={(props) => <Avatar.Icon {...props} icon="bell-ring" style={{ backgroundColor: theme.colors.secondaryContainer }} color={theme.colors.onSecondaryContainer} />}
          />
          <Card.Content>
            <Text variant="bodyLarge" style={{ color: theme.colors.onSurface }}>Lisinopril 10mg at 8:00 PM</Text>
          </Card.Content>
          <Card.Actions>
            <IconButton icon="check" mode="contained" onPress={() => {}} />
          </Card.Actions>
        </Card>
      </Animated.View>
    </ScrollView>
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
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  headerText: {
    flex: 1,
  },
  card: {
    marginBottom: 16,
    borderRadius: 24,
  },
});
