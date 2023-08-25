import axios from 'axios';

export const getCoinData = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    return response.data;
};
