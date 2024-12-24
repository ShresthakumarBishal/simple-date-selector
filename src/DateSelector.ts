import { IDateSelector } from './interfaces';
import { populateYearSelector, populateMonthSelector, populateDaySelector } from './populate';
import { checkFirstOption, validateYears } from './populate';

/**
 * A class to manage date selection via dropdowns for year, month, and day.
 */
class DateSelector implements IDateSelector {
    // Represents the HTML select element for choosing the year
    private yearSelectElement: HTMLSelectElement;

    // Represents the HTML select element for choosing the month
    private monthSelectElement: HTMLSelectElement;

    // Represents the HTML select element for choosing the day
    private daySelectElement: HTMLSelectElement;

    /**
     * Initializes the DateSelector
     */
    constructor() {
        this.yearSelectElement = document.getElementById('year') as HTMLSelectElement;
        this.monthSelectElement = document.getElementById('month') as HTMLSelectElement;
        this.daySelectElement = document.getElementById('day') as HTMLSelectElement;
    }
    
    /**
     * Sets or updates the element IDs for year, month, and day selectors.
     * Ensure that the select elements are properly assigned
     * 
     * @param yearId - ID of the year select element.
     * @param monthId - ID of the month select element.
     * @param dayId - ID of the day select element.
     */
    element(yearId: string , monthId: string, dayId: string ): void {

        // Check if any of the provided arguments is null or undefined
        if (!yearId && !monthId && !dayId) {
            // Log an error message if any argument is missing or null
            console.error("ERROR: The function 'element()' requires exactly 3 arguments. Please provide three non-null arguments.");
            return;
        }

        // Attempt to get the HTMLSelectElement for each ID
        this.yearSelectElement = document.getElementById(yearId) as HTMLSelectElement;
        this.monthSelectElement = document.getElementById(monthId) as HTMLSelectElement;
        this.daySelectElement = document.getElementById(dayId) as HTMLSelectElement;

        // Check if the yearSelectElement  monthSelectElement daySelectElement were found and is valid
        if (!this.yearSelectElement) console.error(`ERROR: Select element with ID '${yearId}' not found.`);
        if (!this.monthSelectElement) console.error(`ERROR: Select element with ID '${monthId}' not found.`);
        if (!this.daySelectElement) console.error(`ERROR: Select element with ID '${dayId}' not found.`);

        // Update event listeners for the year, month, and day selectors.
        this.event();
    }
    
    /**
     * Sets up event listeners for the year, month, and day selectors.
    */
    event(): void {
        if (!this.yearSelectElement || !this.monthSelectElement || !this.daySelectElement) return;

        // Populate year dropdown and set default year if provided
        populateYearSelector(this.yearSelectElement, '');

        // Listener for year change
        this.yearSelectElement.addEventListener('change', () => {
            const selectedYear = parseInt(this.yearSelectElement.value , 10);
            if (!isNaN(selectedYear)) {
                populateMonthSelector(this.monthSelectElement, selectedYear, this.monthSelectElement.value);

                // If no month is selected, populate the day dropdown with a default option
                if (!this.monthSelectElement.value) {
                    this.daySelectElement.appendChild(checkFirstOption(this.daySelectElement));
                }
            }
        });
        
        // Listener for month change
        this.monthSelectElement.addEventListener('change', () => {
            const selectedYear = parseInt(this.yearSelectElement.value, 10);
            const selectedMonth = parseInt(this.monthSelectElement.value, 10);
            if (!isNaN(selectedYear) && !isNaN(selectedMonth)) {
                populateDaySelector(this.daySelectElement, selectedYear, selectedMonth, this.daySelectElement.value);
            }
            if (isNaN(selectedMonth)) {
                this.daySelectElement.appendChild(checkFirstOption(this.daySelectElement));
            }
        });
    }
    
    /**
     * Initializes the dropdowns with options and sets default values if provided.
     * 
     * @param defaultYear - The default year to select.
     * @param defaultMonth - The default month to select.
     * @param defaultDay - The default day to select.
     */
    initialize(defaultYear: string, defaultMonth: string='', defaultDay: string=''): void {
        // Check if all dropdown elements are available
        if (!this.yearSelectElement || !this.monthSelectElement || !this.daySelectElement) return;

        if (defaultYear == '')
            return;

        this.yearSelectElement.value = defaultYear;

        // If a year is selected, populate month dropdown
        if (this.yearSelectElement.value) {
            const selectedMonth = defaultMonth == '' ? this.monthSelectElement.value:defaultMonth;
            populateMonthSelector(this.monthSelectElement, parseInt(defaultYear, 10), selectedMonth);
            
        } else {
            // Handle case where year is not valid
            console.error("ERROR: The Year you provided '%s' is not available in the option of Years.", defaultYear);
            this.monthSelectElement.appendChild(checkFirstOption(this.monthSelectElement));
            this.daySelectElement.appendChild(checkFirstOption(this.daySelectElement));
            return;
        }
        
        // If a month is selected, populate day dropdown
        if (this.monthSelectElement.value) {
            const selectedDay = defaultDay == '' ? this.daySelectElement.value:defaultDay;
            populateDaySelector(this.daySelectElement, parseInt(defaultYear, 10), parseInt(this.monthSelectElement.value, 10), selectedDay);
        } else {
            // Handle case where month is not valid
            if (defaultMonth)
                console.error("ERROR: The month you provided '%s' is not available in the option of months.", defaultMonth);
            this.daySelectElement.appendChild(checkFirstOption(this.daySelectElement));
            return;
        }

        if (!this.daySelectElement.value) {
            if (defaultDay)
                console.error("ERROR: The Day you provided '%s' is not available in the option of days.", defaultDay);
            this.daySelectElement.appendChild(checkFirstOption(this.daySelectElement));
        }
    }

    /**
     * Adds year options to the year select element.
     * 
     * @param startYear - The start year for the range.
     * @param endYear - The end year for the range.
     */
    addYears(startYear: string, endYear: string, yearToSelect: string = ''): void {
        if (!this.yearSelectElement || !this.monthSelectElement || !this.daySelectElement) return;

        var [validateStartYear, validateEndYear] = validateYears(startYear, endYear);
        
        var year = yearToSelect == '' ? this.yearSelectElement.value:yearToSelect;

        // Populate year dropdown and clear all exist default option
        populateYearSelector(this.yearSelectElement, year, validateStartYear, validateEndYear);

        // If a year is selected, populate month dropdown
        this.initialize(year);
    }
}

export default DateSelector;