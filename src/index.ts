// Import the DateSelector class from its module
import DateSelector from './DateSelector';

// Create an instance of DateSelector and attach it to the global window object
(window as any).dateSelector = new DateSelector();

// Add event listeners to the DateSelector instance
// This enables the dropdowns to react to user changes, such as selecting a different year or month
(window as any)?.dateSelector.event();

// Ensure that the DateSelector instance is properly initialized
document.addEventListener('DOMContentLoaded', () => {
    if (!(window as any).dateSelector) {
        // Log an error if the DateSelector instance is not available
        console.error('Error: DateSelector has not been initialized. Please check that the initialization script has executed correctly and that the DateSelector library is properly included. Ensure the script link is correct and try reloading the page.');
    }
});
