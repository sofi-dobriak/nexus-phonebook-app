import styles from './DeleteConfirmModal.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { IoClose } from 'react-icons/io5';
import { closeModal, openModal } from '../../redux/modals/slice';
import { selectContact, selectIsConfirmDeleteModalOpen } from '../../redux/modals/selectors';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const DeleteConfirmModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsConfirmDeleteModalOpen);
  const contact = useAppSelector(selectContact);

  const handleDeleteContact = (id: number): void => {
    dispatch(deleteContact(id));
    dispatch(closeModal('isConfirmDeleteModalOpen'));
    dispatch(openModal({ modalKey: 'isDeleteMessageModalOpen' }));
  };

  const handleWrapperClose = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal('isConfirmDeleteModalOpen'));
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        dispatch(closeModal('isConfirmDeleteModalOpen'));
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return (): void => document.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return (
    <div
      onClick={handleWrapperClose}
      className={clsx(styles.confirmModalWrapper, isOpen && styles.visible)}
    >
      <div className={styles.confirmModalWindow}>
        <button
          onClick={() => dispatch(closeModal('isConfirmDeleteModalOpen'))}
          className={styles.closeButton}
        >
          <IoClose className={styles.closeIcon} />
        </button>
        <h2 className={styles.confirmModalTitle}>Delete the contact?</h2>
        {contact && contact.id !== undefined && (
          <button
            onClick={() => handleDeleteContact(contact.id!)}
            className={styles.confirmModalButton}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
