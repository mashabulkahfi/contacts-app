import React from 'react';

function ArchiveButton({ id, onArchive }) {
    return <button className='contact-item__delete' onClick={() => onArchive(id)}>Y</button>
}

export default ArchiveButton;