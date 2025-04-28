import s from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contactsItem}>
      <div className={s.contactButtonContainer}>
        <div className={s.contactInfo}>
          <div className={s.iconTextContainer}>
            <IoPersonSharp />
            <p>{name}</p>
          </div>

          <div className={s.iconTextContainer}>
            <FaPhone />
            <p>{number}</p>
          </div>
        </div>

        <button onClick={() => onDelete(id)} className={s.button}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
