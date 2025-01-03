# DateSelector Documentation

## 1. Introduction
<!-- `DateSelector` is a lightweight JavaScript/TypeScript library for managing date selection via dropdown menus. It simplifies the process of creating dynamic year, month, and day dropdowns, ensuring only valid date options are displayed based on user selections. -->

DateSelector is a lightweight and efficient JavaScript/TypeScript library designed to simplify the process of creating dynamic date selection dropdowns.  It automatically updates the available year, month, and day options based on user selections, ensuring valid date choices. Perfect for forms and applications that require date inputs and user-friendly date selection.

### Key Features
- Dynamically populate year, month, and day dropdowns.
- Automatically adjusts the day options based on the selected month and year.
- If the year is not selected, the month and day dropdown options will not display.
- Day options are only displayed once a valid month and year are selected.
- Fully customizable dropdown IDs and ranges.

#### OnChange even

- Automatically unselects the day dropdown option when the month is changed to unselected.
- Automatically unselects both the month and day dropdown options when the year is changed to unselected.

---


## 2. Installation

### Install via npm
DateSelector can be easily installed via npm:
```bash
npm i simple-date-selector
```

### Or use the built script directly in your project
Alternatively, you can include the library directly in your in your HTML file via a `<script>` tag:
```html
<script src="https://unpkg.com/simple-date-selector@1.0.3/lib/index.js"></script>
```
---

## 3. Usage

### 3.1 Add Dropdown Elements
Add the following dropdowns to your HTML file:
```html
<select id="year"></select>
<select id="month"></select>
<select id="day"></select>
```

### 3.2 Library Initialization
The library automatically creates a `DateSelector` instance and assigns it to the variable `dateSelector`.

You can directly use library instance using `dateSelector.methodeName()`.
<!-- 
If you want to create a custom instance:
```typescript
const customDateSelector = new DateSelector();
``` -->
---

`*** Available Methods ***`

### `initialize(year, month, day)`

Use the initialize method to set pre-selected values for the year, month, and day dropdowns.

#### Parameters:
- `year` - The year to pre-select.
- `month` - The month to pre-select.
- `day` - The day to pre-select.

#### Example:
```typescript
dateSelector.initialize('2024'); // Only pre-select the year
dateSelector.initialize('2024', '02'); // Only pre-select the year and month
dateSelector.initialize('2024', '02', '07'); // Set the year, month, and day
```
---

### `addYears(startYearOption, endYearOption, yearToSelect)`

By default, the year dropdown will display options in the range from 1950 to the current year. To set a custom range of years for the year dropdown, use the addYears() method.

***If you don’t want to change the range of the year dropdown, you do not need to use this method. ***

#### Parameters:
- `startYearOption` - The starting year for the dropdown option. Pass 'now' for currecnt Year.
- `endYearOption` - The ending year for the dropdown option. Pass 'now' for currecnt Year.
- `yearToSelect` - The year to pre-select (optional).

#### Example:
```typescript
dateSelector.addYears('1900', '2030', '2022');
```

##### To set the range of years from 1900 to the current year
```typescript
// 'now' represents the current year
dateSelector.addYears('1900', 'now', '2022');
```

##### To set the year range in descending order:
```typescript
dateSelector.addYears('2030', '1950', '2022');

// 'now' represents the current year
dateSelector.addYears('now', '1950', '2022');
```
---

### `element(yearId, monthId, dayId)`
By default, the library uses the IDs year, month, and day for the dropdowns. If you want to customize these IDs, use the element method to assign your custom IDs.

***If you are using year, month, and day as the IDs for the dropdowns, then there is no need to use this method. ***

***Use this method first, before using other methods, when you need to set a custom year range. ***

#### Parameters:
- `yearId` - The ID of the year dropdown.
- `monthId` - The ID of the month dropdown.
- `dayId` - The ID of the day dropdown.

Example
Suppose you customize the IDs of the dropdown selectors like this:

```html
<select id="customYearId"></select>
<select id="customMonthId"></select>
<select id="customDayId"></select>
```
To Assign the custom IDs of the dropdown selectors, use the element method:

```typescript
dateSelector.element('customYearId', 'customMonthId', 'customDayId');
```
---

## 4. Set Custom Option as Default Selection

To set the first option of the dropdowns as a default, such as `Select Year`, 'Select Month', and `Select Day`, you can modify the HTML structure of the `<select>` elements. This will add a placeholder option at the top of each dropdown that will act as the default selection.

```html
<select id="customYearId">
    <option>Select Year</option>
</select>

<select id="customMonthId">
    <option>Select Month</option>
</select>

<select id="customDayId">
    <option>Select Day</option>
</select>
```
### `Demo Image`
<img src="img/demo1.png" alt="result" />

___

## 5. Complete Example

```typescript
************************** Assign custom IDs *****************************

// Assign custom IDs of the year, month, and day dropdowns.
// If you are using year, month, and day as the IDs for the dropdowns,
// you do not need to use this method.
// Use element() method only when you have custome IDs
// Use this method first, before using other methods, when you need to set a custom year range
dateSelector.element('customYearId', 'customMonthId', 'customDayId');


******************** Add a custom range yaers **************************

// Add a custom range of 1950 to 2030 years to the year dropdown
dateSelector.addYears('1950', '2030');

// Year range from 1980 to 2030, with the pre-selected year set to 2000
dateSelector.addYears('1980', '2030', '2000');

// Add a range of years from 2030 to 1950 in descending order
dateSelector.addYears('2030', '1950', '2022');

*********************** Set pre-select values ***************************

// Pre-select only the year as 2024
dateSelector.initialize('2024'); 

// Pre-select year 2024 and month 02
dateSelector.initialize('2024', '02');

// Pre-select year 2024, month 02, and day 07
dateSelector.initialize('2024', '02', '07');

```
---

## 6. How to Use?
Here is demo full source code to use this library in HTML file. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Date Selector Test</h1>

    <div class="date-section">

        <label for="year">Year:</label>
        <select id="yearId">
            <option value="">Select</option>
        </select>

        <label for="month">Month:</label>
        <select id="monthId" onclick="check()">
            <option value="">Select</option>
        </select>

        <label for="day">Day:</label>
        <select id="dayId">
            <option value="">Select</option>
        </select>

    </div>

    <!-- Include your bundled library -->
    <script src="./dist/date-selector.js"></script>
    <script>
        // Assign custom IDs of the year, month, and day dropdowns.
        dateSelector.element('yearId', 'monthId', 'dayId');

        // Add a custom range yaers dropdowns
        dateSelector.addYears('2000', 'now');

        // Set pre-select values
        dateSelector.initialize('2020', '09', '07');
    </script>
</body>
</html>
```
### `Demo Image`
<img src="img/demo.png" alt="result" />

---

## 7. LIVE DEMO 🕊️

You can change the parameters of these two methods of the library, then click the "**Run Code**" button to see the result on the right side.

### Methods:
- `dateSelector.addYears('2000', '2030');`
- `dateSelector.initialize('2020', '7', '7');`

### For Live Demo: [Click ME](https://shresthakumarbishal.github.io/portfolio.github.io/editor)

___

## 6. Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## 7. License
This library is licensed under the ISC License.
