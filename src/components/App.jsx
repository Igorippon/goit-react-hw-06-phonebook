import { GlobalStyle } from "./GlobalStyle";
import { Layuot } from "./Layout";
import { Filter } from "./Filter/Filter";
import { ContactForm } from "./ContactForm/ContactForm.js";
import { ContactList } from "./ContactList/ContactList.js";


// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const getInitialContacts = () => {
//   return JSON.parse(localStorage.getItem("contacts")) ?? initialState;
// };

export const App = () => {
  return (
    <Layuot>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layuot>
  );
}
