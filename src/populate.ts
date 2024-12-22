// Get the current date values
const now = new Date();
const currentYear: number = now.getFullYear();
const currentMonth: number = now.getMonth() + 1; // Months are zero-indexed
const currentDay: number = now.getDate();

/**
 *  Populates the year dropdown from 1920 to the current year.
 * 
 * @param yearSelectElement - The HTML select element for years.
 * @param defaultYear - The default year to select.
 */
export const populateYearSelector = (yearSelectElement: HTMLSelectElement, defaultYear: string, startYear: number = 1950, endYear: number = currentYear): void => {

    const selectYear = parseInt(defaultYear, 10) || 0;

    // Re-add the first child option
    yearSelectElement.appendChild(checkFirstOption(yearSelectElement));

    populateOptions(yearSelectElement, startYear, endYear, selectYear);
}

/**
 * Populates the month dropdown based on the selected year.
 * 
 * @param monthSelectElement - The HTML select element for months.
 * @param selectedYear - The selected year.
 * @param defaultMonth - The default month to select.
 */
export const populateMonthSelector = (monthSelectElement: HTMLSelectElement, selectedYear: number, defaultMonth: string): void => {

    const selectedValue = parseInt(defaultMonth, 10) || 0;

    monthSelectElement.appendChild(checkFirstOption(monthSelectElement));

    // Determine the maximum month based on the selected year
    const maxMonth = selectedYear === currentYear ? currentMonth : 12;

    populateOptions(monthSelectElement, 1, maxMonth, selectedValue);

}

/**
 * Populates the day dropdown based on the selected year and month.
 * 
 * @param daySelectElement - The HTML select element for days.
 * @param selectedYear - The selected year.
 * @param selectedMonth - The selected month.
 * @param defaultDay - The default day to select.
 */
export const populateDaySelector = (daySelectElement: HTMLSelectElement, selectedYear: number, selectedMonth: number, defaultDay: string): void => {

    const selectedValue = parseInt(defaultDay, 10) || 0;

    // Re-add the first child option
    daySelectElement.appendChild(checkFirstOption(daySelectElement));

    // Get the last day of the selected month
    const maxDay = new Date(selectedYear, selectedMonth, 0).getDate();

    // Limit days to the current day if the selected year and month are the current year and month
    const limitDay = (selectedYear === currentYear && selectedMonth === currentMonth) ? currentDay : maxDay;

    populateOptions(daySelectElement, 1, limitDay, selectedValue);
}

/**
 * Returns the first child option of a select element or creates a new one if none exist.
 * 
 * @param selectElement - The HTML select element.
 * @return The first option element or a new option element.
 */
export const checkFirstOption = (selectElement: HTMLSelectElement): HTMLOptionElement => {
    const firstChild = selectElement.firstElementChild as HTMLOptionElement;

    // Clear existing options
    selectElement.innerHTML = ''; 

    // Assign the first child to the select element
    return firstChild || document.createElement('option');
}

/**
 * Populates a select element with options from optionStart to optionEnd.
 * 
 * @param selectElement - The HTML select element to populate.
 * @param optionStart - The starting value for options.
 * @param optionEnd - The ending value for options.
 * @param selectedValue - The value to set as selected.
 */
const populateOptions = (selectElement: HTMLSelectElement, optionStart: number, optionEnd: number, selectedValue: number): void => {
    for (let value = optionStart; optionStart < optionEnd ? value <= optionEnd:value >= optionEnd; optionStart < optionEnd ? value++: value--) {
        const option = document.createElement('option');
        option.value = value.toString();
        option.textContent = value.toString();
        // Set the selected property to true for the selectedValue
        if (value === selectedValue) {
            option.selected = true;
        }
        selectElement.appendChild(option);
    }
}

/**
 * 
 * @param startYear - The starting year value (can be 'now' to use the current year).
 * @param endYear - The ending year value (can be 'now' to use the current year).
 * @returns - An array containing the start year and end year as strings.
 */
export const validateYears = (startYear: string, endYear: string): number[] => {
    // If 'now' is passed, set the start and end year to the current year
    if (startYear === 'now') {
        startYear = currentYear.toString();
    }
    if (endYear === 'now') {
        endYear = currentYear.toString();
    }

    // Validate both start and end years
    var validatedStartYear: number = validateYear(startYear);
    var validatedEndYear: number = validateYear(endYear);

    // Return an array with the start and end years as strings
    return [validatedStartYear, validatedEndYear];
}

/**
 * Validates the year input, checking if it is a valid number, 
 * a 4-digit year, and if it is not before 1900.
 * 
 * @param year - The year to validate.
 * @throws Error if the year is invalid.
 */
const validateYear = (year: string): number => {
    const yearNumber = parseInt(year, 10);
    
    // Check if the year is a valid number
    if (isNaN(yearNumber)) {
        throw new Error(`ERROR: The value '${year}' is not a valid number. Please provide a valid year.`);
    }

    // Check if the year is a 4-digit number
    if (year.length !== 4) {
        throw new Error(`ERROR: The year '${year}' should have exactly 4 digits.`);
    }

    // Check if the year is not before 1900
    if (yearNumber < 1900) {
        throw new Error(`ERROR: The year '${year}' is before 1900. Please provide a year greater than or equal to 1900.`);
    }

    return yearNumber;
};