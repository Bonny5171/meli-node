export default class Price {
  constructor(props = {}) {
    this.currency = props.currency || null;
    this.amount = props.amount || null;
    this.decimals = props.decimals || null;
  }
}
