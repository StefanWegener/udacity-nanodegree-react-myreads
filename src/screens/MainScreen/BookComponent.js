import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Card, Popover } from 'antd';

import ShelfSelectionComponent from './ShelfSelectionComponent';

class BookComponent extends Component {
  render() {
    const { book } = this.props;
    return (
      <Card
        key={book.id}
        style={{ width: 200, margin: 24 }}
        bodyStyle={{ padding: 0 }}
        extra={
          <Popover
            placement="bottom"
            content={
              <ShelfSelectionComponent
                shelf={book.shelf}
                changeShelf={newShelf => this.props.changeShelf(book, newShelf)}
              />
            }
            title="Move book to shelf ..."
            trigger="click"
          >
            <Button type="primary" shape="circle" icon="select" size="large" />
          </Popover>
        }
      >
        <div style={{ height: 260, width: '100%' }}>
          <img alt="example" width="100%" height="100%" src={book.imageLinks.thumbnail} />
        </div>
        <div className="custom-card">
          <h3>{book.title}</h3>
          <p>
            {book.authors &&
              book.authors.map((a, i) => {
                if (i < book.authors.length - 1) return `${a}, `;
                return a;
              })}
          </p>
        </div>
      </Card>
    );
  }
}

BookComponent.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  book: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    shelf: React.PropTypes.string,
  }).isRequired,
};

export default BookComponent;
