import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import { selectFilter, selectContacts } from 'redux/Contacts/selectors';
import {List, Item, Button, Paragraf } from './contacts.styled';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const dataFilter = useSelector(selectFilter);
  const dispatch = useDispatch();
    
  const onFilteredContacts = () => {
    if (dataFilter) {
      const normalisedContacts = dataFilter.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalisedContacts)
      );
    }
    return contacts;
  };
  
  const filteredContacts = onFilteredContacts();
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Paragraf>
            {name}: {number}
          </Paragraf>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            DELETE
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactsList;
