export const initialStore = () => ({
  message: null,
  contacts: [],
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'load_contacts':
      return {
        ...store,
        contacts: action.payload,
      };

    case 'delete_contact':
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== action.payload),
      };

    case 'add_contact':
      return {
        ...store,
        contacts: [...store.contacts, action.payload],
      };

    default:
      throw new Error('Unknown action.');
  }
}
