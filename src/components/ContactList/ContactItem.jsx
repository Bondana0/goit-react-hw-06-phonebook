import React from 'react';
import { StiledItem } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/slises/contactSlise';

export function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <StiledItem key={id}>
        <p>
          {name}: {number}
        </p>
        <div></div>
        <button
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </StiledItem>
    </>
  );
}
