import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    //inisialisasi state
    this.state={
      name: '',
      tag: '',
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    if (this.props.maxLengthName > this.state.name.length){
      this.setState((prevState) => {
        return {
          ...prevState,
          name: event.target.value,
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          name: event.target.value.slice(0, this.props.maxLengthName)
        }
      })
    }
    // this.setState((prevState) => {
    //   return {
    //     ...prevState,
    //     name: event.target.value,
    //   }
    // });
  }

  onTagChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        tag: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);

    this.setState(() => {
      return {
        name:'',
        tag:'',
      }
    })
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <p>Sisa Karakter : {this.props.maxLengthName - this.state.name.length}</p>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler}></input>
        <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler}></input>
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;