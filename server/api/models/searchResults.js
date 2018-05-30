import Author from './author';

export default class SearchResults {
  constructor(props = {}) {
    this.author = new Author(props.author);
    this.categories = props.categories || [];
    this.items = props.items || [];
  }
}
