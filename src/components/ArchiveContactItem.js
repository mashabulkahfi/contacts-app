import React from 'react';
import UnArchiveButton from './UnArchiveButton';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
 
function ArchiveContactItem({ imageUrl, name, tag, id, onDelete, onUnArchive }) {
 return (
   <div className="contact-item">
     <ContactItemImage imageUrl={imageUrl} />
     <ContactItemBody name={name} tag={tag} />
     <UnArchiveButton id={id} onUnArchive={onUnArchive}/>
     <DeleteButton id={id} onDelete={onDelete}/>
   </div>
 );
}
 
export default ArchiveContactItem;