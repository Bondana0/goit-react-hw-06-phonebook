import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const theme = {};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm btn="Add contact" />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </ThemeProvider>
  );
};
