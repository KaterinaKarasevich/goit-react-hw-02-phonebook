import React from "react";
import {ContactItems, ContactItem, ContactButton} from "./ContactList.styled"

export const ContactList =({contacts, onDeleteContact}) => {
        return (
          <ContactItems>
            {contacts.map(contact => {
                return (
                  <ContactItem key={contact.id}>
                    {contact.name + ": " + contact.number}
                    {<ContactButton
                      class="button-close"
                      type="button"
                      onClick={() => onDeleteContact(contact.id)}>
                      Delete
                    </ContactButton>}
                  </ContactItem>
               )
            })}
           
          </ContactItems>
        )
    }
   

