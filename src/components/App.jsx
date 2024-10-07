import "./App.css";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import { FaAddressBook } from "react-icons/fa";

export default function App() {
  
  return (
    <div>
      <FaAddressBook size="50" />
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}