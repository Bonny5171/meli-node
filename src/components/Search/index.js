import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';

import history from '../../history';

import CommonMethods from '../../utils/CommonMethods';

import Logo from './Logo';
import './search.sass';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  componentWillMount() {
    const { location } = global.window;
    const search = CommonMethods.getSearchFromLocation(location);
    if (search) this.setState({ search });
  }

  @autobind
  handleSearchInputChange(ev) {
    ev.preventDefault();
    this.setState({ search: this.input.value });
  }

  @autobind
  handleSearchInputKeyPress(ev) {
    if (ev.key === 'Enter') {
      const { search } = this.state;
      history.push(`/items?search=${search}`);
      ev.preventDefault();
    }
  }

  render() {
    const { search } = this.state;
    return (
      <div className="search-container">
        <Logo className="search-logo" />
        <input
          className="search-field"
          ref={(r) => { this.input = r; }}
          placeholder="Nunca dejes de buscar"
          onChange={this.handleSearchInputChange}
          onKeyPress={this.handleSearchInputKeyPress}
          value={search}
        />
        <Link to={`/items?search=${search}`}>
          <button className="search-button">
            <FaSearch />
          </button>
        </Link>
      </div>
    );
  }
}
