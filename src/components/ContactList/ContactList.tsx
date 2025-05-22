import s from './ContactList.module.css';
import ContactCard from '../ContactCard/ContactCard';
import { selectFilteredContacts, selectIsError } from '../../redux/contacts/selectors';
import { useAppSelector } from '../../redux/hooks';

const ContactList = () => {
  const visibleContacts = useAppSelector(selectFilteredContacts);
  const isError = useAppSelector(selectIsError);

  const hasContacts: boolean = visibleContacts.length > 0;

  return (
    <>
      {hasContacts && (
        <ul className={s.contactsList}>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactCard key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
      {!hasContacts && !isError && <p className='noContacts'>No contacts</p>}
    </>
  );
};

export default ContactList;
