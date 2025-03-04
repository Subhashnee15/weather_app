==> HTML:
The HTML file provides the structure of the app, including an input field to enter the city name and a button to trigger the search. The results will be displayed in the weather-info section.
==> CSS:
Basic styling is applied to center the app, format the input field, and display the weather results nicely.
==> JavaScript:
The JavaScript file does the heavy lifting. It fetches weather data from the OpenWeatherMap API when the user clicks the "Search" button or presses "Enter".
The API URL is built dynamically with the city name entered by the user, and the units=metric query parameter ensures the temperature is displayed in Celsius.
The fetched data is used to update the page with the city's name, temperature, weather description, humidity, and wind speed.
If the city is not found or there is an error, an alert is displayed.
==>  Testing the Weather App
Sign up for an API key on OpenWeatherMap.
Replace the YOUR_API_KEY placeholder in the JavaScript file with your actual API key.
Open the index.html file in your browser.
Enter a city name, click "Search", and the weather data should appear.
