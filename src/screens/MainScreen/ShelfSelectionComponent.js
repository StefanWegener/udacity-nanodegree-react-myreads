import React, { Component } from "react";

import { Select } from "antd";

const Option = Select.Option;

class ShelfSelectionComponent extends Component {
  render() {
    return (
      <div>
        <Select
          defaultValue={this.props.shelf}
          style={{ width: "100%" }}
          onChange={this.props.changeShelf}
        >
          <Option value="currentlyReading">Currently Reading</Option>
          <Option value="wantToRead">Want to Read</Option>
          <Option value="read">Read</Option>
        </Select>
      </div>
    );
  }
}


export default ShelfSelectionComponent;