import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card, Popover } from 'antd';

import ShelfSelectionComponent from './ShelfSelectionComponent';

import * as styles from './styles';

function BookComponent({ book, changeShelf }) {
  return (
    <Card
      key={book.id}
      style={styles.book}
      bodyStyle={styles.bookPadding}
      extra={
        <Popover
          placement="bottom"
          content={
            <ShelfSelectionComponent
              shelf={book.shelf}
              changeShelf={newShelf => changeShelf(book, newShelf)}
            />
          }
          title="Move book to shelf ..."
          trigger="click"
        >
          <Button type="primary" shape="circle" icon="select" size="large" />
        </Popover>
      }
    >
      <div style={styles.bookThumbnail}>
        <img alt="example" width="100%" height="100%" src={book.imageLinks.thumbnail} />
      </div>
      <div className="custom-card">
        <h3>{book.title}</h3>
        <p>{book.authors ? book.authors.join(', ') : ''}</p>
      </div>
    </Card>
  );
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
