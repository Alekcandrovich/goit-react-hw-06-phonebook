import React from 'react';
import { deleteContact } from '../../redux/contacts';
import { useDispatch } from 'react-redux';
import css from './contactListItem.module.css';

const ContactListItem = ({ contact }) => {

  const dispatch = useDispatch();
    
    const onDeleteContact = () => {
      dispatch(deleteContact(contact.id));
    };
   
  return (
    <li className={css.contactsItem}>
      {contact.name}: {contact.number}{' '}
      <button
        className={css.deleteButton}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
}


export default ContactListItem;