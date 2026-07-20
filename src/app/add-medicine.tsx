import React from 'react';
import { View, StyleSheet, ScrollView, Platform, TouchableOpacity, Image } from 'react-native';
import { Appbar, TextInput, Button, useTheme, SegmentedButtons, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddMedicineScreen() {
  const router = useRouter();
  const theme = useTheme();

  const [name, setName] = React.useState('');
  const [dosage, setDosage] = React.useState('');
  const [frequency, setFrequency] = React.useState('daily');
  
  const [date, setDate] = React.useState(new Date());
  const [showPicker, setShowPicker] = React.useState(false);
  
  const [imageUri, setImageUri] = React.useState<string | null>(null);

  const handleSave = () => {
    router.back();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const onChangeTime = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Appbar.Header mode="center-aligned">
        <Appbar.Action icon="close" onPress={() => router.back()} />
        <Appbar.Content title="Add Medicine" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.content}>
        
        <Animated.View entering={FadeInDown.delay(50).duration(500)} style={styles.imagePickerContainer}>
          <TouchableOpacity onPress={pickImage} style={[styles.imagePlaceholder, { backgroundColor: theme.colors.surfaceVariant, borderColor: theme.colors.outline }]}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.image} />
            ) : (
              <View style={styles.imagePlaceholderContent}>
                <Appbar.Action icon="camera-plus" color={theme.colors.onSurfaceVariant} size={32} />
                <Text variant="labelLarge" style={{ color: theme.colors.onSurfaceVariant }}>Add Photo</Text>
              </View>
            )}
          </TouchableOpacity>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100).duration(500)}>
          <TextInput
            mode="outlined"
            label="Medicine Name"
            placeholder="e.g. Lisinopril"
            value={name}
            onChangeText={setName}
            style={styles.input}
            left={<TextInput.Icon icon="pill" />}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(500)}>
          <TextInput
            mode="outlined"
            label="Dosage"
            placeholder="e.g. 10mg"
            value={dosage}
            onChangeText={setDosage}
            style={styles.input}
            left={<TextInput.Icon icon="flask" />}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300).duration(500)}>
          <SegmentedButtons
            value={frequency}
            onValueChange={setFrequency}
            buttons={[
              { value: 'daily', label: 'Daily' },
              { value: 'weekly', label: 'Weekly' },
              { value: 'as_needed', label: 'As Needed' },
            ]}
            style={styles.input}
          />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400).duration(500)} style={styles.timePickerContainer}>
          {Platform.OS === 'ios' ? (
            <View style={[styles.iosPickerRow, { borderColor: theme.colors.outline, backgroundColor: theme.colors.surface }]}>
              <Text variant="bodyLarge" style={{ color: theme.colors.onSurface }}>Reminder Time</Text>
              <DateTimePicker
                value={date}
                mode="time"
                is24Hour={false}
                onChange={onChangeTime}
                style={{ width: 100 }}
              />
            </View>
          ) : (
            <>
              <TouchableOpacity onPress={() => setShowPicker(true)}>
                <TextInput
                  mode="outlined"
                  label="Reminder Time"
                  value={date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  editable={false}
                  style={styles.input}
                  left={<TextInput.Icon icon="clock-outline" />}
                />
              </TouchableOpacity>
              {showPicker && (
                <DateTimePicker
                  value={date}
                  mode="time"
                  is24Hour={false}
                  onChange={onChangeTime}
                />
              )}
            </>
          )}
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(500).duration(500)} style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleSave} style={styles.button} contentStyle={styles.buttonContent}>
            Save Medicine
          </Button>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  imagePickerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imagePlaceholderContent: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  input: {
    marginBottom: 24,
  },
  timePickerContainer: {
    marginBottom: 24,
  },
  iosPickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {
    borderRadius: 100, // Pill shape
  },
  buttonContent: {
    paddingVertical: 8,
  },
});
