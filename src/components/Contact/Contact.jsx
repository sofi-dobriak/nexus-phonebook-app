import s from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

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

        <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
