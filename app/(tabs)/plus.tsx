import React from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, Text } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol'; // Assuming IconSymbol is the icon component
import { ThemedText } from '@/components/ThemedText'; // Assuming you're using ThemedText for consistent styling

// Independent ProfileIcon Component
const ProfileIcon = () => (
  <View style={styles.profileContainer}>
    <IconSymbol
      name="person.circle.fill" // Profile icon
      size={120} // Larger profile icon
      color="#4C8C99" // A different color for the profile icon
      style={styles.profileIcon} // Custom style to add circular border
    />
  </View>
);

// Contribution data for the entire year, divided into weeks (each value represents a level of contribution)
const contributionData = {
  Jan: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4
    // Add more weeks if necessary
  ],
  Feb: [
    [0, 0, 1, 2, 1, 1, 0],
    [1, 1, 2, 0, 0, 1, 1],
    [0, 1, 1, 2, 0, 1, 2],
    [0, 1, 2, 0, 3, 1, 0],
    // Add more weeks if necessary
  ],
  Mar: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4
  ],
  Apr: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4
  ],
  May: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4
  ],
  June: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4
  ],
  July: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4
  ],
  Aug: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4
  ],
  Sept: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4
  ],
  Oct: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4
  ],
  Nov: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4
  ],
  Dec: [
    [0, 1, 2, 3, 0, 1, 2], // Week 1
    [0, 1, 2, 0, 1, 2, 3], // Week 2
    [0, 1, 0, 3, 2, 1, 2], // Week 3
    [1, 1, 2, 0, 3, 1, 0], 
    [1, 1, 1],// Week 4

  ],
  // Add data for other months (Mar-Dec)
  // ...
};

// Enhanced color function with a better gradient
const getColorForContributions = (value) => {
  switch (value) {
    case 0:
      return '#ebedf0'; // No contribution
    case 1:
      return '#c6e48b'; // Low
    case 2:
      return '#7bc96f'; // Medium
    case 3:
      return '#196127'; // High
    default:
      return '#ebedf0';
  }
};

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* Name Text at the top */}
      <ThemedText style={styles.nameText}>Rares Carbunaru</ThemedText>

      {/* Profile Icon (Independent component) */}
      <ProfileIcon />

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <IconSymbol 
          name="pencil" // Icon for editing (can be changed as needed)
          size={24}
          color="#fff" 
        />
      </TouchableOpacity>

      {/* Text below the edit button */}
      <ThemedText style={styles.textBelowButton}>
        Tap to edit your profile details
      </ThemedText>

      {/* Contribution Graph */}
      <ScrollView 
        showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
        contentContainerStyle={styles.verticalGridContainer}>
        
        <View style={styles.contributionContainer}>
          {/* Months and Contribution Grid */}
          <View style={styles.monthsContainer}>
            {Object.keys(contributionData).map((month, monthIndex) => (
              <View key={monthIndex} style={styles.monthRow}>
                {/* Month Label */}
                <Text style={styles.monthText}>{month}</Text>

                {/* Weeks */}
                <View style={styles.weeksContainer}>
                  {contributionData[month].map((week, weekIndex) => (
                    <View key={weekIndex} style={styles.weekRow}>
                      {week.map((day, dayIndex) => (
                        <View
                          key={dayIndex}
                          style={[
                            styles.gridCell,
                            { backgroundColor: getColorForContributions(day) }, // Dynamically set color
                          ]}
                        />
                      ))}
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  profileIcon: {
    borderWidth: 4,
    borderColor: '#A1CEDC',
    borderRadius: 60,
  },
  editButton: {
    backgroundColor: '#A1CEDC',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 10,
  },
  textBelowButton: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  verticalGridContainer: {
    marginTop: 20,
    paddingHorizontal: 15, // Adjust padding for overall alignment
  },
  contributionContainer: {
    flexDirection: 'column',
  },
  monthsContainer: {
    flexDirection: 'column',
  },
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, // Create spacing between months
  },
  monthText: {
    width: 50, // Ensure uniform width for month labels
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'right',
    marginRight: 10, // Space between month label and grid
  },
  weeksContainer: {
    flexDirection: 'row', // Arrange weeks horizontally
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  gridCell: {
    width: 18,
    height: 18,
    margin: 1.5, // Ensure consistent spacing between cells
    borderRadius: 3,
    backgroundColor: '#ebedf0', // Default color for no contribution
  },
});

