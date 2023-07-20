const axios = require("axios");

const getTickerData = async () => {
  try {
    const response = await axios.get(
      "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo"
    );
    const { most_actively_traded, top_gainers, top_losers } = response.data;

    const tickers = [...most_actively_traded, ...top_gainers, ...top_losers];

    return tickers;
  } catch (error) {
    console.error("Error fetching ticker data:", error);
    throw error;
  }
};

module.exports = getTickerData
