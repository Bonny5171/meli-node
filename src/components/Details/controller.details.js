import axios from 'axios';

const ControllerDetails = {
  getDetailsFromAPI: async (id) => {
    try {
      const response = await axios.get(`${process.env.API_URL}/api/items/${id}`);
      return response.data;
    } catch (err) {
      console.error('ControllerDetails.getDetailsFromAPI', err);
      return err;
    }
  },
};

module.exports = ControllerDetails;
