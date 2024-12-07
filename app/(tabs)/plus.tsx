import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol'; // Assuming IconSymbol is the icon component
import { ThemedText } from '@/components/ThemedText'; // Assuming you're using ThemedText for consistent styling
import { LineChart } from 'react-native-chart-kit';

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

export default function TabTwoScreen() {
  // Sample data for the chart (initial values are set to 0)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Months
    datasets: [
      {
        data: [200, 400, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Data points initialized to 0
      },
    ],
  };

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

      {/* Graph at the bottom */}
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={Dimensions.get('window').width - 40} // Chart width, with padding on sides
          height={220} // Chart height
          chartConfig={styles.chartConfig}
          bezier // This makes the graph lines smooth
          withHorizontalLabels={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7', // Light background color for the whole screen
    justifyContent: 'flex-start', // Align everything to the top
    alignItems: 'center', // Center items horizontally
    paddingTop: 100, // Add some space at the top for better layout
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Darker color for the name text
    marginBottom: 20, // Space between name and profile icon
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15, // Space below the profile icon
  },
  profileIcon: {
    borderWidth: 4,
    borderColor: '#A1CEDC', // Border color for the profile icon
    borderRadius: 60, // Making the icon circular
    padding: 0, // Padding to create space between the icon and the border
  },
  editButton: {
    backgroundColor: '#A1CEDC',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30, // Rounded button for a softer look
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Slight shadow effect for the button
    marginBottom: 5, // Space between the button and the text
  },
  textBelowButton: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666', // Lighter text color for the description
    marginTop: 10, // Add some space above the text
  },
  chartContainer: {
    marginTop: 30, // Margin at the top for spacing between the button and the chart
    alignSelf: 'center', // Center the chart horizontally
  },
  chartConfig: {
    backgroundColor: '#f7f7f7', // Light background for the chart
    backgroundGradientFrom: '#A1CEDC', // Gradient color for the chart
    backgroundGradientTo: '#A1CEDC', // Gradient color for the chart
    decimalPlaces: 0, // Display no decimal points for data values
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White line and points
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White labels
    style: {
      borderRadius: 10, // Rounded corners for the chart
    },
    propsForLabels: {
      dx: -30, // Increase space between the x-axis labels
      
    },
    // Adjust the space between y-axis labels and make them fit well
    propsForYAxisLabels: {
      dx: -15, // Move the y-axis labels more to the left
      dy: 0, // Keep them aligned properly vertically
    },
    paddingLeft: 10, // Add padding to the left of the chart to fit the y-axis labels
    paddingRight: 20, // Add padding to the right of the chart to balance the spacing
  },
});
