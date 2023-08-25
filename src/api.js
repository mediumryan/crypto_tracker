import axios from 'axios';

export const getCoinData = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    return response.data;
};

export const getPrice = async (coinId) => {
    const response = await axios.get(
        `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
    );
    return response.data;
};

export const getTickers = async (coinId) => {
    const response = await axios.get(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
    );
    return response.data;
};

export const getInfo = async (coinId) => {
    const response = await axios.get(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
    );
    return response.data;
};
