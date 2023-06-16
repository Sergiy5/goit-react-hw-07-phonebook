// import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Form from './Form/form';
import ContactsList from './Contacts/contacts';
import Filter from './Filter/filter';
import { Container } from './mainContainer.styled';
import { fetchContacts } from 'redux/Contacts/operations';
import { selectError, selectIsLoading } from 'redux/Contacts/selectors';
import Loader from './Loader/loader';

const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  
  useEffect(() => {
    dispatch(fetchContacts());  
  }, [dispatch])
  
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactsList />
      </Container>
    );
}

export default App;

// App.propTypes = {
//   state: PropTypes.exact({
//     contacts: PropTypes.arrayOf(
//       PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       })
//     ),
//     filter: PropTypes.string,
//   }),
// }