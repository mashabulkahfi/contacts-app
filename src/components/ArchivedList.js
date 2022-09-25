import React from 'react';
import ArchiveContactItem from './ArchiveContactItem';
 
function ArchivedList({ contacts, onDelete, onUnArchive }) {
  const contactArchive = contacts.filter(contact => {
    return contact.isArchived===true;
  });

  return (
    <div className="contact-list">
     {
       contactArchive.map((contact) => (
         <ArchiveContactItem 
          key={contact.id} 
          id={contact.id}
          onDelete={onDelete}
          onUnArchive={onUnArchive}
          {...contact} />
       ))
     }
    </div>
 );
}
 
export default ArchivedList;