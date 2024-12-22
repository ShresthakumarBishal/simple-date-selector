// Import the DateSelector class from its module
import DateSelector from './DateSelector';

// Create an instance of DateSelector and attach it to the global window object
(window as any).dateSelector = new DateSelector();

// Initialize the DateSelector instance
// This will populate the year, month, and day dropdowns with current options
// Default values for year, month, and day are not provided, so the dropdowns will be populated with available options
// (window as any)?.dateSelector.initialize();

// Add event listeners to the DateSelector instance
// This enables the dropdowns to react to user changes, such as selecting a different year or month
(window as any)?.dateSelector.event();