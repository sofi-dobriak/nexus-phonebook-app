import MessageModal from '../MessageModal/MessageModal';

const DeleteMessageModal = () => {
  return (
    <MessageModal modalKey='isDeleteMessageModalOpen'>
      Contact successfully <strong>deleted</strong>
    </MessageModal>
  );
};

export default DeleteMessageModal;
