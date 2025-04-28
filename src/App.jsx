import Title from './components/Title/Title';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contacts/operations';
import { selectContacts, selectError, selectLoading } from './redux/contacts/selectors';

function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const hasContacts = contacts.length > 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title />
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p className='request'>Request in progress...</p>}
      {hasContacts && <ContactList />}
      {!hasContacts && !isLoading && !error && <p className='noContacts'>No contacts</p>}
    </>
  );
}

export default App;
