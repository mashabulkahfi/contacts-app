import React from 'react';
import ContactList from './ContactList';
import ContactInput from './ContactInput';
import { getData } from '../utils/data';
import ArchivedList from './ArchivedList';
 
class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnArchiveHandler = this.onUnArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onArchiveHandler(id) {
    const contacts = this.state.contacts.map(contact => {
      // if contact.id == id update contact.isArchived value to true
      if (contact.id === id){
        return {...contact, isArchived: true};
      }
      return contact
    })
    this.setState({ contacts });
  }

  onUnArchiveHandler(id) {
    const contacts = this.state.contacts.map(contact => {
      // if contact.id == id update contact.isArchived value to true
      if (contact.id === id){
        return {...contact, isArchived: false};
      }
      return contact
    })
    this.setState({ contacts });
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts:[
          ...prevState.contacts,
          {
            id: +new Date(),
            name:name,
            tag:tag,
            imageUrl: '/images/default.jpg',
            isArchived: false,
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} maxLengthName={10}/>
        <h2>Daftar Kontak</h2>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
        <h2>Arsip Kontak</h2>
        <ArchivedList contacts={this.state.contacts} onDelete={this.onDeleteHandler} onUnArchive={this.onUnArchiveHandler}/>
      </div>
    );
  }
}

export default ContactApp;

