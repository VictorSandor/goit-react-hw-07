import Contact from "./Contact";
import style from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchQuery = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  if (filteredContacts.length === 0) {
    return (
      <p className={style.noContactsMessage}>
        {contacts.length === 0
          ? "There are no contacts in a phonebook"
          : "There are no contacts matching your query"}
      </p>
    );
  }
  return (
    <ul className={style.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}



// export default function ContactList({ contacts, onDelete }) {
//   return (
//     <ul className={css.contacts}>
//       {contacts.map((contact) => {
//         return (
//           <li className={css.contact} key={contact.id}>
//             <Contact
//               id={contact.id}
//               name={contact.name}
//               number={contact.number}
//               onDelete={onDelete}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }