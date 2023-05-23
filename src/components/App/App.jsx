
import {useState, useEffect} from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookContainer } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';




export default function App() {

  // const [contacts, setContacts] = useState([])
  // const [filter, setFilter] = useState("")

  // useEffect(() => {
   
  //      const contactList = localStorage.getItem('contact');
  //      const parsedContacts = JSON.parse(contactList);

  //      if (parsedContacts) {
  //       setContacts([...parsedContacts])
  //      }
    
  // }, [])

  // useEffect(() => {
  //   if (contacts.length > 0) {
  //     localStorage.setItem('contact', JSON.stringify(contacts))
  //   }
    
  // }, [contacts])

  // const onAddContactBtn = (newContact) => {
  //     setContacts(prevState => [...contacts, newContact]
  //       )
  // }

  //  const deleteButton = id => {
  //  setContacts(prevState => prevState.filter(contact => contact.id !== id)
  //     )
  // }

  
  // const onFilterChange = (e) => {
  //   const { value } = e.currentTarget;
  //   setFilter(value);
  // }
  
  

  
  return (
      <PhoneBookContainer>
        <h1>PhoneBook</h1>
        <ContactForm
          // contacts={contacts}
          // onAddContactBtn={onAddContactBtn}
        />

        <h2>Contacts</h2>
        <Filter
          // onChange={onFilterChange}
          // value={filter}
        />
        <ContactList
          // contacts={getFilteredContacts()}
          // deleteButton={deleteButton}
        />
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
/>
      </PhoneBookContainer>
      
    );
}

