import React from 'react';
import ContactItem from './ContactItem';
 
function ContactList({ contacts, onDelete, onArchive }) {
  const validContact = contacts.filter(contact => {
    return contact.isArchived===false;
  });
  console.log(validContact);
  console.log(validContact.length);
 return (
   <div className="contact-list">
     { validContact.length > 0 ?
       validContact.map((contact) => (
         <ContactItem 
          key={contact.id} 
          id={contact.id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...contact} />
       ))
       : <h2>Tidak ada Data</h2>
     }
   </div>
 );
}
 
export default ContactList;