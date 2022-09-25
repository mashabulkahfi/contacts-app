import React from 'react';
import ArchiveButton from './ArchiveButton';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
 
function ContactItem({ imageUrl, name, tag, id, onDelete, onArchive }) {
 return (
   <div className="contact-item">
     <ContactItemImage imageUrl={imageUrl} />
     <ContactItemBody name={name} tag={tag} />
     <ArchiveButton id={id} onArchive={onArchive}/>
     <DeleteButton id={id} onDelete={onDelete}/>
   </div>
 );
}
 
export default ContactItem;