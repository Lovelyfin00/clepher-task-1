# Stock Data Viewer

A React application that displays paginated stock data fetched from the Alpha Vantage API.

## Features

- Fetches daily stock data for a given symbol
- Displays data in a paginated table with 7 items per page
- Includes serial numbers for each row
- Responsive design using Tailwind CSS
- Built with TypeScript for improved type safety

## Installation

1. Clone the repository: 
```
git clone https://github.com/lovelyfin00/clepher-task-1.git
cd clepher-task-1
```
2. Install dependencies: 
```
npm install
```
3. Rename the `.env.example` file to `.env` in the root directory and add your API key and BASE_URL.
4. Start the development server:
```
npm run dev
```

## Data Displayed

This app fetches and displays the following daily stock data:

- Date
- Open price
- High price
- Low price
- Close price
- Volume

The data is retrieved from the Alpha Vantage API's TIME_SERIES_DAILY endpoint.