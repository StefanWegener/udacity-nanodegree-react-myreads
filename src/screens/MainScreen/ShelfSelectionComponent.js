import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const Option = Select.Option;

function ShelfSelectionComponent({ shelf, changeShelf }) {
  return (
    <div>
      <Select defaultValue={shelf} style={{ width: '100%' }} onChange={changeShelf}>
        <Option value="currentlyReading">Currently Reading</Option>
        <Option value="wantToRead">Want to Read</Option>
        <Option value="read">Read</Option>
      </Select>
    </div>
  );
}

ShelfSelectionComponent.propTypes = {
  shelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default ShelfSelectionComponent;
