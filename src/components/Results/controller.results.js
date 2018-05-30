import axios from 'axios';

const ControllerResults = {
  getItemsFromAPI: async (query) => {
    try {
      const response = await axios.get(`${process.env.API_URL}/api/items?q=${query}&limit=4`);
      return response.data;
    } catch (err) {
      console.error('ControllerResults.getItemsFromAPI', err);
      return err;
    }
  },
};

module.exports = ControllerResults;
