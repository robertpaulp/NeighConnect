import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import { addIssue } from '@/backend/api/strapi';

const IssueForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      // Call addIssue function from strapi.js
      const result = await addIssue(title, description, date, category, location, image);
      console.log('Issue created successfully:', result);
      Alert.alert('Success', 'Issue added successfully');
    } catch (error) {
      console.error('Error submitting issue:', error);
      Alert.alert('Error', 'There was an issue submitting the form');
    }
  };

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const selectImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('Image Picker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri);
        }
      }
    );
  };

  const categoryOptions = ['Road', 'Water', 'Electricity', 'Sanitation'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Add your Issue</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Tell us about your problem"
          placeholderTextColor="#D0D0D0"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Explain how that problem is affecting you"
          placeholderTextColor="#D0D0D0"
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>

      {/* Date and Photo Row */}
      <View style={styles.row}>
        {/* Date Picker */}
        <View style={styles.flexItem}>
          <Text style={styles.label}>Date</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateButtonText}>
              {date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}
        </View>

        {/* Photo Upload */}
        <View style={styles.flexItem}>
          <Text style={styles.label}>Photo</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={selectImage}>
            <Text style={styles.uploadButtonText}>
              {image ? 'Change Photo' : 'Upload Photo'}
            </Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
        </View>
      </View>

      {/* Category Selection */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Category</Text>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => setCategoryModalVisible(true)}
        >
          <Text style={styles.uploadButtonText}>
            {category || 'Select a Category'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Category Modal */}
      <Modal
        transparent
        visible={categoryModalVisible}
        animationType="slide"
        onRequestClose={() => setCategoryModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Select a Category</Text>
            <FlatList
              data={categoryOptions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() => {
                    setCategory(item);
                    setCategoryModalVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCategoryModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Location Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the location of the issue"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f3f3f3',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    marginTop: 80,
    textAlign: 'center', 
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 16,
  },
  flexItem: {
    flex: 1,
    marginRight: 8,
  },
  dateButton: {
    backgroundColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    marginTop: 8,
  },
  dateButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  uploadButton: {
    backgroundColor: '#ddd',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    marginTop: 8,
  },
  uploadButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imagePreview: {
    marginTop: 8,
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalItem: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
    alignItems: 'center',
  },
  modalItemText: {
    fontSize: 16,
    color: '#000',
  },
  closeButton: {
    marginTop: 16,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  closeButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#fff',
    borderRadius: 12,  // Adjust the border radius for more rounded corners
    paddingVertical: 12,
    paddingHorizontal: 10,  // Adjust padding to match other inputs
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',  // Ensure it takes full width like the input fields
  },
  
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center', // Center the text in the button
  },
});

export default IssueForm;
