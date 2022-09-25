import React from 'react';

function UnArchiveButton({ id, onUnArchive }) {
    return <button className='contact-item__delete' onClick={() => onUnArchive(id)}>Z</button>
}

export default UnArchiveButton;