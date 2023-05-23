export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

// export const selectVisibleContacts = (contacts, filter) => {
//   const filtered = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filtered)
//   );
// };