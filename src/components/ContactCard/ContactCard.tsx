import styles from './ContactCard.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';
import { openModal } from '../../redux/modals/slice';
import { useAppDispatch } from '../../redux/hooks';
import { Contact } from '../../types/contact-user';

const ContactCard = ({ id, name, number }: Contact) => {
  const dispatch = useAppDispatch();

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

export default ContactCard;
