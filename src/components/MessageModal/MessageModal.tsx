import styles from './MessageModal.module.css';
import clsx from 'clsx';
import { useEffect } from 'react';
import { closeModal } from '../../redux/modals/slice';
import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ModalKey } from '../../redux/modals/slice';

interface MessageModalProps {
  modalKey: ModalKey;
  children: ReactNode;
}

const MessageModal = ({ modalKey, children }: MessageModalProps) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.modals[modalKey]);

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
