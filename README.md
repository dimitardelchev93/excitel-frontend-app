# excitel-frontend-app

This is a React.js application that utilizes the Excitel Countries API to display a list of countries, search for countries by name, and display detailed information about a specific country.

## Features

- Fetches and displays a list of countries in a responsive table
- Provides filtering by name, sorting of columns, and paging
- Displays a detailed view of a country when a user holds the left mouse button on a table row
- Implements an autocomplete filter box for searching countries by name
- Displays additional information about a selected country

## Installation

To install the necessary dependencies and run the application, follow these steps:

1. Clone the repository:

```git clone https://github.com/yourusername/react-country-search.git```

2. Navigate to the project folder:

```excitel-frontend-app```

3. Install the dependencies:

```npm install```

4. Start the development server:

```npm start```

The application will be running at `http://localhost:3000`.

## Usage

1. Use the search box to filter countries by name.
2. Click on column headers to sort the table by a specific field.
3. Press and hold the left mouse button on a table row to view more details about a country.
4. Use the autocomplete filter box to search for countries by name and view additional information about the selected country.

## Dependencies

- React
- TypeScript
- Axios
- Material-UI
- React Query
- Styled Components

## API

This application uses the following APIs:

- API1: All countries
  - GET `https://excitel-countries.azurewebsites.net/countries`
- API2: Search by name
  - GET `https://excitel-countries.azurewebsites.net/countries/{name}`
