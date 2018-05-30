import Price from './price';

export default class Item {
  constructor(props = {}) {
    this.id = props.id || null;
    this.title = props.title || null;
    this.price = new Price(props.price);
    this.picture = props.picture || null;
    this.condition = props.condition || null;
    this.free_shipping = props.free_shipping || false;
    this.sold_quantity = props.sold_quantity || null;
    this.description = props.description || null;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }
}
