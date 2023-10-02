import { GlobalStyle } from "./GlobalStyle";
import { Layuot } from "./Layout";
import { Filter } from "./Filter/Filter";
import { ContactForm } from "./ContactForm/ContactForm.js";
import { ContactList } from "./ContactList/ContactList.js";

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
