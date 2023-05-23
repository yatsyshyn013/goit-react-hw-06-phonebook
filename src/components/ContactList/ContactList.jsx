import { List, ListItem, ContactListBtn } from "./ContactList.styled"
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";
import { getFilter } from "redux/selectors";
import { useCallback } from 'react';
import { selectVisibleContacts } from 'redux/selectors';
import { filterContacts } from '../../services/filterContacts';

export function ContactList() {

    // const { contacts, filter } = useSelector(state => state);
    const contacts = useSelector(getContacts)
    // const filter = useSelector(getFilter)
    const filter = useSelector(state => state.filter)
    console.log(filter);
    //   const { contacts, filter } = useSelector(state => state);
    const dispatch = useDispatch();

    // const getFilteredContacts = useCallback(() => {
    //     // const normalizeTarget = filter.toLowerCase();
    //     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    //     // console.log(filteredContacts);

    // })
    
//     const getFilteredContacts = useCallback(
//         () => { return contacts.filter(contact => contact.name.toLowerCase().includes(filter)) },
//     [contacts, filter]
//   );
    
      const filtredContacts = useCallback(
    () => filterContacts(contacts, filter),
    [contacts, filter]
  );


    return (
        <List>

            {filtredContacts().map(({id, name, number}) => (
                
                <ListItem key={id}>{name}: {number}
                <ContactListBtn type="button" onClick={()=> dispatch(deleteContact(id))}>Delete</ContactListBtn>
                </ListItem>
                    
                
            ))}
           
        </List>
    )
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         }).isRequired
        
//     ).isRequired,

//     deleteButton: PropTypes.func.isRequired,

// }