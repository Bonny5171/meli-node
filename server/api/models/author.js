export default class Author {
  constructor(props = {}) {
    this.name = props.name || null;
    this.lastname = props.lastname || null;
  }
}
