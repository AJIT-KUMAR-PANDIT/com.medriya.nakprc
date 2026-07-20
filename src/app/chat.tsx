import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text, TextInput, Surface, useTheme, Appbar } from 'react-native-paper';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function Chat() {
  const theme = useTheme();

  return (
    <KeyboardAvoidingView 
      style={[styles.container, { backgroundColor: theme.colors.background }]} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Appbar.Header style={{ backgroundColor: theme.colors.surface }}>
        <Appbar.Content title="Medriya Assistant" titleStyle={{ fontWeight: 'bold' }} />
      </Appbar.Header>

      <ScrollView style={styles.chatArea} contentContainerStyle={styles.chatContent}>
        <Animated.View entering={FadeInUp.delay(100).duration(400)}>
          <Surface style={[styles.messageBubble, styles.aiBubble, { backgroundColor: theme.colors.surfaceVariant }]} elevation={1}>
            <Text style={{ color: theme.colors.onSurfaceVariant, fontSize: 16, lineHeight: 24 }}>Hello! I am your Medriya AI assistant. How can I help you with your health today?</Text>
          </Surface>
        </Animated.View>
        
        <Animated.View entering={FadeInUp.delay(300).duration(400)}>
          <Surface style={[styles.messageBubble, styles.userBubble, { backgroundColor: theme.colors.primary }]} elevation={1}>
            <Text style={{ color: theme.colors.onPrimary, fontSize: 16, lineHeight: 24 }}>When should I take Lisinopril?</Text>
          </Surface>
        </Animated.View>
      </ScrollView>

      <Surface style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]} elevation={2}>
        <TextInput 
          mode="outlined"
          placeholder="Type your message..."
          style={styles.input}
          outlineStyle={{ borderRadius: 24 }}
          right={<TextInput.Icon icon="send" onPress={() => {}} />}
        />
      </Surface>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatArea: {
    flex: 1,
  },
  chatContent: {
    padding: 16,
    paddingBottom: 40,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  inputContainer: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 100 : 80, // Tab bar avoidance
  },
  input: {
    backgroundColor: 'transparent',
  }
});
