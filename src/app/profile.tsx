import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Avatar, List, Switch, Button, useTheme } from 'react-native-paper';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Profile() {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(100).duration(500)} style={styles.headerContainer}>
        <Avatar.Image size={100} source={{ uri: 'https://i.pravatar.cc/150?img=68' }} style={{ marginBottom: 16 }} />
        <Text variant="headlineMedium" style={{ fontWeight: 'bold', color: theme.colors.onBackground }}>Jane Doe</Text>
        <Text variant="titleMedium" style={{ color: theme.colors.onSurfaceVariant }}>Blood Type: O+</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).duration(500)} style={styles.section}>
        <Text variant="titleLarge" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Emergency Contacts</Text>
        <List.Section>
          <List.Item
            title="Dr. Smith"
            description="Primary Care • 555-0100"
            left={props => <List.Icon {...props} icon="phone" color={theme.colors.primary} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            style={{ backgroundColor: theme.colors.surfaceVariant, borderRadius: 16 }}
            titleStyle={{ fontWeight: '600' }}
            onPress={() => {}}
          />
        </List.Section>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(300).duration(500)} style={styles.section}>
        <Text variant="titleLarge" style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Settings</Text>
        <List.Section>
          <List.Item
            title="App Preferences"
            left={props => <List.Icon {...props} icon="cog" color={theme.colors.primary} />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            style={{ backgroundColor: theme.colors.surfaceVariant, borderTopLeftRadius: 16, borderTopRightRadius: 16, marginBottom: 2 }}
            onPress={() => {}}
          />
          <List.Item
            title="Dark Mode"
            left={props => <List.Icon {...props} icon="theme-light-dark" color={theme.colors.primary} />}
            right={props => <Switch value={isDarkMode} onValueChange={setIsDarkMode} />}
            style={{ backgroundColor: theme.colors.surfaceVariant, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}
            onPress={() => setIsDarkMode(!isDarkMode)}
          />
        </List.Section>
      </Animated.View>
      
      <Animated.View entering={FadeInDown.delay(400).duration(500)}>
        <Button mode="contained-tonal" icon="logout" onPress={() => {}} style={styles.logoutButton}>
          Sign Out
        </Button>
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
    alignItems: 'center',
    marginBottom: 40,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logoutButton: {
    marginTop: 16,
  }
});
