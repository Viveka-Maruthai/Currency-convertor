document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "https://api.exchangerate-api.com/v4/latest/USD"; // Replace with a working API if needed
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const amount = document.getElementById("amount");
    const resultDiv = document.getElementById("result");
  
    let exchangeRates = {};
    const currencies = {
      USD: "United States Dollar - United States",
      EUR: "Euro - European Union",
      GBP: "British Pound Sterling - United Kingdom",
      AUD: "Australian Dollar - Australia",
      CAD: "Canadian Dollar - Canada",
      INR: "Indian Rupee - India",
      JPY: "Japanese Yen - Japan",
      CNY: "Chinese Yuan - China",
      CHF: "Swiss Franc - Switzerland",
      ZAR: "South African Rand - South Africa",
      BRL: "Brazilian Real - Brazil",
      RUB: "Russian Ruble - Russia",
      KRW: "South Korean Won - South Korea",
      SGD: "Singapore Dollar - Singapore",
      MXN: "Mexican Peso - Mexico",
      NZD: "New Zealand Dollar - New Zealand",
      HKD: "Hong Kong Dollar - Hong Kong",
      MYR: "Malaysian Ringgit - Malaysia",
      SAR: "Saudi Riyal - Saudi Arabia",
      NOK: "Norwegian Krone - Norway"
    };
  
    // Fetch exchange rates and populate dropdowns
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        exchangeRates = data.rates;
  
        // Populate currency dropdowns
        for (let currency in currencies) {
          const optionFrom = document.createElement("option");
          const optionTo = document.createElement("option");
  
          optionFrom.value = optionTo.value = currency;
          optionFrom.textContent = currencies[currency];
          optionTo.textContent = currencies[currency];
  
          fromCurrency.appendChild(optionFrom);
          toCurrency.appendChild(optionTo);
        }
  
        // Set default selections
        fromCurrency.value = "USD";
        toCurrency.value = "EUR";
      })
      .catch((error) => {
        console.error("Error fetching exchange rates:", error);
        resultDiv.textContent = "Failed to load currency data.";
      });
  
    // Handle form submission
    document.getElementById("currencyForm").addEventListener("submit", (e) => {
      e.preventDefault();
  
      const fromValue = fromCurrency.value;
      const toValue = toCurrency.value;
      const amountValue = parseFloat(amount.value);
  
      if (isNaN(amountValue) || amountValue <= 0) {
        resultDiv.textContent = "Please enter a valid amount.";
        return;
      }
  
      const conversionRate = exchangeRates[toValue] / exchangeRates[fromValue];
      const convertedAmount = (amountValue * conversionRate).toFixed(2);
  
      resultDiv.textContent = `${amountValue} ${fromValue} = ${convertedAmount} ${toValue}`;
    });
  });
  