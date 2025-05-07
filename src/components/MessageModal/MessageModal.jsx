import { useDispatch, useSelector } from 'react-redux';
import styles from './MessageModal.module.css';
import clsx from 'clsx';
import { useEffect } from 'react';
import { closeModal } from '../../redux/modals/slice';

const MessageModal = ({ modalKey, children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modals[modalKey]);

  useEffect(() => {
    if (!isOpen) return;

    let timeoutModal = setTimeout(() => {
      dispatch(closeModal(modalKey));
    }, 2500);

    return () => clearTimeout(timeoutModal);
  }, [dispatch, isOpen, modalKey]);

  return <div className={clsx(styles.messageModalBg, isOpen && styles.visible)}>{children}</div>;
};

export default MessageModal;
