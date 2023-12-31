import React from 'react';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'reedux/slises/filterSlise';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    if (event.target.name === 'filter') {
      const filterInputValue = event.target.value;
      dispatch(filteredContacts(filterInputValue));
    }
  };

  return (
    <input
      type="text"
      name="filter"
      required
      value={value}
      onChange={handleChangeFilter}
    />
  );
};
