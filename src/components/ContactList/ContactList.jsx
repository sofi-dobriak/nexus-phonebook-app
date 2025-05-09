import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsError } from '../../redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isError = useSelector(selectIsError);

  const hasContacts = visibleContacts.length > 0;

  return (
    <>
      {hasContacts && (
        <ul className={s.contactsList}>
          {visibleContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
      {!hasContacts && !isError && <p className='noContacts'>No contacts</p>}
    </>
  );
};

export default ContactList;
