import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {visibleContacts.length > 0 && (
        <ul className={s.contactsList}>
          {visibleContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
      {visibleContacts.length === 0 && <p className='noContacts'>No contacts with such name</p>}
    </>
  );
};

export default ContactList;
