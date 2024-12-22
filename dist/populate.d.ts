/**
 *  Populates the year dropdown from 1920 to the current year.
 *
 * @param yearSelectElement - The HTML select element for years.
 * @param defaultYear - The default year to select.
 */
export declare const populateYearSelector: (yearSelectElement: HTMLSelectElement, defaultYear: string, startYear?: number, endYear?: number) => void;
/**
 * Populates the month dropdown based on the selected year.
 *
 * @param monthSelectElement - The HTML select element for months.
 * @param selectedYear - The selected year.
 * @param defaultMonth - The default month to select.
 */
export declare const populateMonthSelector: (monthSelectElement: HTMLSelectElement, selectedYear: number, defaultMonth: string) => void;
/**
 * Populates the day dropdown based on the selected year and month.
 *
 * @param daySelectElement - The HTML select element for days.
 * @param selectedYear - The selected year.
 * @param selectedMonth - The selected month.
 * @param defaultDay - The default day to select.
 */
export declare const populateDaySelector: (daySelectElement: HTMLSelectElement, selectedYear: number, selectedMonth: number, defaultDay: string) => void;
/**
 * Returns the first child option of a select element or creates a new one if none exist.
 *
 * @param selectElement - The HTML select element.
 * @return The first option element or a new option element.
 */
export declare const checkFirstOption: (selectElement: HTMLSelectElement) => HTMLOptionElement;
/**
 *
 * @param startYear - The starting year value (can be 'now' to use the current year).
 * @param endYear - The ending year value (can be 'now' to use the current year).
 * @returns - An array containing the start year and end year as strings.
 */
export declare const validateYears: (startYear: string, endYear: string) => number[];
