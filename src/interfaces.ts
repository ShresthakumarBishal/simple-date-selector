/**
 * Interface defining the required methods for a date selector.
 */
export interface IDateSelector {
    /**
     * Sets up event listeners for the date selector dropdowns.
     */
    event(): void;

    /**
     * Initializes the dropdowns and sets default values.
     * 
     * @param defaultYear - The default year to select.
     * @param defaultMonth - The default month to select.
     * @param defaultDay - The default day to select.
     */
    initialize(defaultYear?: string, defaultMonth?: string, defaultDay?: string): void;

    /**
     * Sets or updates the element IDs for year, month, and day selectors.
     * 
     * @param yearId - ID of the year select element.
     * @param monthId - ID of the month select element.
     * @param dayId - ID of the day select element.
     */
    element(yearId: string, monthId: string, dayId: string): void;
}