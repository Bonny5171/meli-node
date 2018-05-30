import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import ControllerResults from './controller.results';
import CommonMethods from '../../utils/CommonMethods';
import Item from './Item';
import Category from './Category';
import './results.sass';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { searching: false, categories: [], items: [] };
    this.controller = ControllerResults;
  }

  async componentWillMount() {
    await this.search();
  }

  async componentWillReceiveProps() {
    await this.search();
  }

  @autobind
  async search() {
    try {
      const { location } = global.window;
      const search = CommonMethods.getSearchFromLocation(location);
      if (!search) return;
      this.setState({ searching: true });
      const response = await this.controller.getItemsFromAPI(search);
      this.setState({
        items: response.items || [],
        categories: response.categories || [],
      });
    } catch (err) {
      console.error('Results.search', err);
    } finally {
      this.setState({ searching: false });
    }
  }

  renderCategory() {
    const { categories } = this.state;
    let key = 0;
    return categories.map(
      (name) => {
        key += 1;
        return (
          <Category
            name={name}
            key={`category_${key}`}
          />
        );
      },
    );
  }

  renderItems() {
    const { items, searching } = this.state;
    if (searching) {
      return (
        <div className="item-not-found">Buscando itens...</div>
      );
    }
    if (!items.length) {
      return (
        <div className="item-not-found">A busca não retornou resultados</div>
      );
    }
    return items.map(item => <Item key={item.id} item={item} />);
  }

  render() {
    return (
      <div className="results-container">
        <div className="wrapper-categories">
          {this.renderCategory()}
        </div>
        <div className="wrapper-items">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
