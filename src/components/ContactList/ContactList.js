import React from "react";
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contacts';
import ContactListItem from '../ContactListItem';
import css from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!filteredContacts.length)
    return <p className="contacts_not">No contacts found</p>;
  
    return (
      <ul className={css.contactsList}>
        {filteredContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={deleteContact}
          />
        ))}
      </ul>
    );
}

export default ContactList;