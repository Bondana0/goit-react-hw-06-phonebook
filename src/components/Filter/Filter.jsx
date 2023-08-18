import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'Redux/slises/filterSlise';

export const Filter = ({ value }) => {
  const dispatch = useDispatch();
  const onFilterInput = event => {
    if (event.target.name === 'filter') {
      const filterInputValue = event.target.value;
      dispatch(filterContacts(filterInputValue));
    }
  };

  return (
    <input
      type="text"
      name="filter"
      required
      value={value}
      onChange={onFilterInput}
    />
  );
};
