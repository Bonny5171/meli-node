import axios from 'axios';
import querystring from 'query-string';

import Formatter from '../utils/formatter';
import Author from '../models/author';

module.exports = (app) => {
  app.get('/api/items', async (req, res) => {
    try {
      const { query } = req;
      const strQuery = querystring.stringify(query);
      const response = await axios.get(
        `${process.env.MELI_API_URL}/sites/MLA/search?${strQuery}`);
      const rawData = response.data;
      const searchResults = Formatter.rawToSearchResults(rawData);
      res.status(200).json(searchResults);
    } catch (err) {
      console.error('/api/items', err);
      res.status(500).send(err);
    }
  });
  app.get('/api/items/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.get(`${process.env.MELI_API_URL}/items/${id}`);
      const rawData = response.data;
      const item = Formatter.rawToItem(rawData);

      const resDesc = await axios.get(`${process.env.MELI_API_URL}/items/${id}/description`);
      const rawDataDesc = resDesc.data;
      const itemDesc = Formatter.rawToItemDesc(rawDataDesc);

      item.setDescription(itemDesc.getDescription());

      res.status(200).json({ author: new Author(), item });
    } catch (err) {
      console.error('/api/items/:id', err);
      res.status(500).send(err);
    }
  });
};
