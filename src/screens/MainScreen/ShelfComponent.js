import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Row } from 'antd';

import BookComponent from './BookComponent';

class ShelfComponent extends Component {
  renderPlaceholder = () => <Card loading style={{ width: 260, margin: 24 }} />;

  render() {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <Row type="flex" justify="start">
          {!this.props.books && this.renderPlaceholder()}
          {this.props.books &&
            this.props.books
              .filter(b => b.shelf === this.props.shelf)
              .map(b => <BookComponent key={b.id} book={b} changeShelf={this.props.changeShelf} />)}
        </Row>
      </div>
    );
  }
}

ShelfComponent.propTypes = {
  shelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default ShelfComponent;
