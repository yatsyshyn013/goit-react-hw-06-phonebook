
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookContainer } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';





export default function App() {

  
  return (
      <PhoneBookContainer>
        <h1>PhoneBook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
      <Filter />
      
      <ContactList />
      
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
/>
      </PhoneBookContainer>
      
    );
}

