# Currency Converter
This is a simple web application that allows users to convert amounts between different currencies. The user can select the currency to convert from and to, enter the amount, and click a button to perform the conversion. The app fetches the latest exchange rates via an API and displays the conversion result.

## Features
- Convert between multiple currencies (USD, EUR, GBP, INR, and more).
- Automatically fetches live exchange rates using an external API.
- Displays the conversion result in a user-friendly format.
- Input validation to ensure a valid amount is entered.

## Files
- `index.html`: The HTML structure for the Currency Converter.
- `styles.css`: The CSS for styling the application.
- `script.js`: The JavaScript for fetching exchange rates and handling currency conversion.

## How to Use
1. Open the `index.html` file in your browser.
2. Enter the amount you want to convert in the "Amount" field.
3. Select the currency you want to convert from and the currency you want to convert to using the dropdown menus.
4. Click the "Convert" button to perform the conversion.
5. The result will be displayed below the form, showing the converted amount.

## Example
- **Input**: 
    - Amount: `100`
    - From: `USD`
    - To: `EUR`
- **Result**: `100 USD = 85.30 EUR` (result will vary depending on live exchange rates)

## Input Validation
- The user must enter a valid positive number in the "Amount" field. If the input is invalid or empty, a message will prompt the user to enter a valid amount.

## API
The exchange rates are fetched from the [ExchangeRate-API](https://www.exchangerate-api.com/), which provides real-time exchange rates for currencies.

## Customization
You can add or remove currencies by modifying the `currencies` object in the `script.js` file. You can also replace the API URL with a different source if needed.

## Requirements
- A modern web browser (Chrome, Firefox, Safari, etc.).
- No additional software or installations required.

