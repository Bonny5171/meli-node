import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import ControllerDetails from './controller.details';
import CommonProps from '../../utils/CommonProps';
import ItemDetail from './ItemDetail';
import './details.sass';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { item: null };
    this.controller = ControllerDetails;
  }

  async componentWillMount() {
    await this.getDetails();
  }

  @autobind
  async getDetails() {
    try {
      const { match } = this.props;
      const response = await this.controller.getDetailsFromAPI(match.params.id);
      this.setState({ item: response.item });
    } catch (err) {
      console.error('Details.getDetails', err);
    }
  }

  render() {
    const { item } = this.state;
    if (!item) return (null);
    return (
      <div className="details-container">
        <ItemDetail item={item} />
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape(CommonProps.Match).isRequired,
};

export default Details;
