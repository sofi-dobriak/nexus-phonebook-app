import styles from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import { openModal } from '../../redux/modals/slice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contactsItem}>
      <div className={styles.contactButtonContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.iconTextContainer}>
            <IoPersonSharp />
            <p>{name}</p>
          </div>

          <div className={styles.iconTextContainer}>
            <FaPhone />
            <p>{number}</p>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <button
            onClick={() =>
              dispatch(
                openModal({
                  modalKey: 'isUpdateContactModalOpen',
                  payload: { id, name, number },
                })
              )
            }
            className={styles.editButton}
          >
            <MdEdit className={styles.editIcon} />
          </button>
          <button
            onClick={() =>
              dispatch(openModal({ modalKey: 'isConfirmDeleteModalOpen', payload: { id } }))
            }
            className={styles.deleteButton}
          >
            <FaTrash className={styles.deleteIcon} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Contact;
