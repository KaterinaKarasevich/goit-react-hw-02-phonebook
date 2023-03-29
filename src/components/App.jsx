import { nanoid } from "nanoid";
import React, {Component} from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList"
import { Filter} from "./Filter/Filter"
import {Title, TitleContacts} from "./App.styled"

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    //name: '',
    //number: ''
  }

  addContact = (data) => {
    const existingName = this.state.contacts
      .map((contact) => contact.name)
      .includes(data.name)
    if (existingName) {
      alert (`${data.name} is already in contacts`)
    } else {
    const newUser = {
      ...data, 
      id: nanoid(),
    }
    //console.log(newUser)
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newUser]
    }))
      }
  }
  changeInputFilter =(evt) => {
    this.setState({filter: evt.currentTarget.value})
  };

  deleteContact = (userId) => {
    this.setState((prevState) => {
      return {
          contacts: prevState.contacts.filter(({id}) => id !==userId),
        }
      })
   }
  
  render() {
    return (
      <div>
        <Title>Phonebook</Title>
           <ContactForm addContact={this.addContact} />

        <TitleContacts>Contacts</TitleContacts>
           <Filter data={this.state.filter} onChangeInputFilter={this.changeInputFilter}/>
           <ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  };
 
}
