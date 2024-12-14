# Currency-convertor
This is a simple currency converter web application that allows users to convert an amount from one currency to another. It fetches real-time exchange rates from a free public API and provides a user-friendly interface to perform currency conversions.

#Features
Real-time Exchange Rates: Fetches current exchange rates from https://api.exchangerate-api.com.
Multiple Currencies: Allows conversion between multiple global currencies like USD, EUR, GBP, JPY, INR, and many others.
User-Friendly Interface: Simple form with input fields to enter the amount, select currencies, and get the converted amount.
Responsive Design: Adapts to different screen sizes for a smooth experience on both desktop and mobile devices.

#Technologies Used
HTML: The structure of the web page.
CSS: Styling for the user interface.
JavaScript: Handles dynamic functionality like fetching exchange rates and performing currency conversions.
Exchange Rate API: Free API (https://api.exchangerate-api.com/v4/latest/USD) is used to fetch the exchange rates.

#How It Works
Input Fields: The user enters an amount they wish to convert.
Dropdown Menus: The user selects the currency to convert from and the currency to convert to.
Conversion Calculation: When the user submits the form, the app fetches the exchange rates from the API and performs the conversion.
Result Display: The converted amount is displayed on the page.

#Usage Instructions
Clone or Download: Download the HTML file and open it in your web browser.
Select Currencies: Choose the currencies from the dropdown lists. By default, the app is set to convert from USD to EUR.
Enter Amount: Input the amount you want to convert into the "Amount" field.
Convert: Press the "Convert" button to see the conversion result.
View the Result: The result will be displayed below the form in the format:<Amount> <From Currency> = <Converted Amount> <To Currency>

#Example Usage
From: USD
To: EUR
Amount: 100
Result: 100 USD = 85 EUR (example based on current rates)
