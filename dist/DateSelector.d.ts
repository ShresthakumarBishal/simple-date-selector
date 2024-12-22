import { IDateSelector } from './interfaces';
/**
 * A class to manage date selection via dropdowns for year, month, and day.
 */
declare class DateSelector implements IDateSelector {
    private yearSelectElement;
    private monthSelectElement;
    private daySelectElement;
    /**
     * Initializes the DateSelector
     */
    constructor();
    /**
     * Sets or updates the element IDs for year, month, and day selectors.
     * Ensure that the select elements are properly assigned
     *
     * @param yearId - ID of the year select element.
     * @param monthId - ID of the month select element.
     * @param dayId - ID of the day select element.
     */
    element(yearId: string, monthId: string, dayId: string): void;
    /**
     * Sets up event listeners for the year, month, and day selectors.
    */
    event(): void;
    /**
     * Initializes the dropdowns with options and sets default values if provided.
     *
     * @param defaultYear - The default year to select.
     * @param defaultMonth - The default month to select.
     * @param defaultDay - The default day to select.
     */
    initialize(defaultYear: string, defaultMonth?: string, defaultDay?: string): void;
    /**
     * Adds year options to the year select element.
     *
     * @param startYear - The start year for the range.
     * @param endYear - The end year for the range.
     */
    addYears(startYear: string, endYear: string, yearToSelect?: string): void;
}
export default DateSelector;
