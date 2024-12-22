// Import the module './initializeDateSelector'
// This statement is used to execute any code contained in the 'initializeDateSelector' file
// The file is typically used for setting up or initializing the DateSelector component
// and may include code for initializing the component on page load, configuring default values, or other setup tasks
import './initializeDateSelector';

// Ensure that the DateSelector instance is properly initialized
document.addEventListener('DOMContentLoaded', () => {
    if (!(window as any).dateSelector) {
        // Log an error if the DateSelector instance is not available
        console.error('Error: DateSelector has not been initialized. Please check that the initialization script has executed correctly and that the DateSelector library is properly included. Ensure the script link is correct and try reloading the page.');
    }
});
