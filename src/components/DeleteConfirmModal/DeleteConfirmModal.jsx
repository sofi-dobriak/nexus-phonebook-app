import { useDispatch, useSelector } from 'react-redux';
import styles from './DeleteConfirmModal.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { IoClose } from 'react-icons/io5';
import { closeModal } from '../../redux/modals/slice';
import { selectContact, selectIsConfirmDeleteModalOpen } from '../../redux/modals/selectors';
import clsx from 'clsx';

const DeleteConfirmModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsConfirmDeleteModalOpen);
  const contact = useSelector(selectContact);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    dispatch(closeModal('isConfirmDeleteModalOpen'));
  };

  return (
    <div className={clsx(styles.confirmModalWrapper, isOpen && styles.visible)}>
      <div className={styles.confirmModalWindow}>
        <button
          onClick={() => dispatch(closeModal('isConfirmDeleteModalOpen'))}
          className={styles.closeButton}
        >
          <IoClose className={styles.closeIcon} />
        </button>
        <h2 className={styles.confirmModalTitle}>Delete the contact?</h2>
        <button
          onClick={() => handleDeleteContact(contact.id)}
          className={styles.confirmModalButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
