import React, { Component } from "react";

import { Card, Row } from "antd";

import BookComponent from './BookComponent';

class ShelfComponent extends Component {

  renderPlaceholder = () => {
    return <Card loading style={{ width: 260, margin: 24 }} />;
  };

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
              .map(b => (<BookComponent key={b.id} book={b} changeShelf={this.props.changeShelf}/>))}
        </Row>
      </div>
    );
  }
}

export default ShelfComponent;
