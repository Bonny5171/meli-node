import _ from 'lodash';

import SearchResults from '../models/searchResults';
import Item from '../models/item';

const rawSearchResultsDefault = { results: [], filters: [] };
const rawItemDefault = { shipping: {} };
const rawItemDescDefault = { snapshot: {} };

const Formatter = {
  rawToSearchResults: (raw = rawSearchResultsDefault) => {
    // Tentativa de pegar alguma categoria dos filtros
    // Ficou bem fundo, porém foi o unico lugar que tinha algum dado de categoria
    const categories = [];
    const catFilter = _.find(raw.filters, (filter => filter.id === 'category'));
    if (catFilter && catFilter.values) {
      catFilter.values.forEach((value) => {
        if (value && value.path_from_root) {
          value.path_from_root.forEach((path) => {
            if (path.name) categories.push(path.name);
          });
        }
      });
    }
    const items = raw.results.map(result => Formatter.rawToItem(result));
    return new SearchResults({ categories, items });
  },
  rawToItem: (raw = rawItemDefault) => (
    new Item({
      id: raw.id,
      title: raw.title,
      price: {
        currency: raw.currency_id,
        amount: raw.price,
      },
      picture: raw.thumbnail,
      condition: raw.condition,
      free_shipping: raw.shipping.free_shipping,
      sold_quantity: raw.sold_quantity,
    })
  ),
  rawToItemDesc: (raw = rawItemDescDefault) => (
    new Item({ description: raw.plain_text })
  ),
};

export default Formatter;
