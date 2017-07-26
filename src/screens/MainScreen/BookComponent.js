import React, { Component } from "react";

import { Button, Card } from "antd";

class BookComponent extends Component {
  render() {
    const { book } = this.props;

    return (
      <Card
        key={book.id}
        style={{ width: 260, margin: 24 }}
        bodyStyle={{ padding: 0 }}
        extra={
          <Button type="primary" shape="circle" icon="select" size="large" />
        }
      >
        <div style={{ height: 350, width: 260 }}>
          <img
            alt="example"
            width="100%"
            height="100%"
            src={book.imageLinks.thumbnail}
          />
        </div>
        <div className="custom-card">
          <h3>
            {book.title}
          </h3>
          <p>
            {book.authors.map((a, i) => {
              if (i < book.authors.length - 1) return `${a}, `;
              else {
                return a;
              }
            })}
          </p>
        </div>
      </Card>
    );
  }
}

export default BookComponent;
