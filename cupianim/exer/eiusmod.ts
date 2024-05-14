function updateStudentInfo(student: Record<string, any>, newInfo: Record<string, any>): Record<string, any> {
  // Create a new object to hold the updated student information
  const updatedStudent = { ...student };

  // Iterate over the properties in newInfo
  for (const key in newInfo) {
    if (newInfo.hasOwnProperty(key)) {
      // Update the property value if newInfo has the property
      updatedStudent[key] = newInfo[key];
    }
  }

  // Return the updated student information
  return updatedStudent;
}
