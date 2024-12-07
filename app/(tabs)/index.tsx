import React from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';
import { FAB } from 'react-native-paper';  // Import FAB from react-native-paper
import ProfileCard from '@/components/ProfileCard';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchBox} 
            placeholder="Search..."
            placeholderTextColor="#888"
          />
        </View>

        <ProfileCard
          imageSource={require('@/assets/images/icon.png')}
          name="Jane Smith"
          description="A short description of Jane"
        />
      </ScrollView>

      {/* Floating Action Button */}
      <FAB
        style={styles.fab}
        icon={ require("@/assets/images/favicon.png")}  // You can use any icon from react-native-paper icons
        onPress={() => {
          console.log("Floating action button pressed");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  searchBox: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    marginTop: 50,
  },
  fab: {
    position: 'absolute',
    bottom: 100,  // Adjusted position to keep it away from the screen edge
    right: 10,    // Positioned at the right side
    width: 60,    // Width of the FAB (circle size)
    height: 60,   // Height of the FAB (circle size)
    borderRadius: 30,  // Half of the width/height to make it round
    backgroundColor: '#6200ee',  // Custom color for the FAB button
    justifyContent: 'center',  // Ensure the content is centered
    alignItems: 'center',     // Ensure the icon is centered
  },
});
