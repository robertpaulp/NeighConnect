const apiUrl = 'http://10.200.22.17:13339/api/issues';

// Function to add an issue
export const addIssue = async (title, description, date, category, location, image) => {
  try {
    // Create the request body data (simulating a form submit with data fields)
    const formData = new FormData();
    formData.append("data[title]", title);
    formData.append("data[description]", description);
    formData.append("data[date]", date.toISOString()); // Ensure date is in the right format
    formData.append("data[category]", category);
    formData.append("data[location]", location);

    // If image is selected, add it to the FormData
    if (image) {
      const imageUri = image;
      const imageName = imageUri.split('/').pop(); // Extract file name
      const fileType = imageUri.split('.').pop(); // Extract file type (e.g., png, jpg)
      const imageFile = {
        uri: imageUri,
        name: imageName,
        type: `image/${fileType}`,
      };
      formData.append('files.image', imageFile);
    }

    // Use Fetch API to send the data to the Strapi backend
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data', // This is important for FormData
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to create the issue.');
    }

    const result = await response.json();
    return result; // Return the result from Strapi
  } catch (error) {
    console.error('Error submitting issue:', error);
    throw error; // Re-throw error to handle it in the component
  }
};
