import styles from './EditModal.module.css';
import { IoClose } from 'react-icons/io5';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { editContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, selectIsUpdateContactModalOpen } from '../../redux/modals/selectors';
import { closeModal, openModal } from '../../redux/modals/slice';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Required'),
  number: Yup.string()
    .matches(/^[\d-]+$/, 'Phone number must contain only digits')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const EditModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsUpdateContactModalOpen);
  const contact = useSelector(selectContact);
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    if (contact && isOpen) {
      setContactData({
        id: contact.id,
        name: contact.name,
        number: contact.number,
      });
    }
  }, [contact, isOpen]);

  const initializedValue = {
    name: contact?.name || '',
    number: contact?.number || '',
  };

  const handleSubmit = values => {
    dispatch(
      editContact({
        id: contactData.id,
        name: values.name,
        number: values.number,
      })
    );

    dispatch(closeModal('isUpdateContactModalOpen'));
    dispatch(openModal({ modalKey: 'isUpdateMessageModalOpen' }));
  };

  const handleWrapperClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal('isUpdateContactModalOpen'));
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        dispatch(closeModal('isUpdateContactModalOpen'));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      onClick={handleWrapperClick}
      className={clsx(styles.editModalWrapper, isOpen && styles.visible)}
    >
      <div className={styles.editModalWindow}>
        <button
          onClick={() => dispatch(closeModal('isUpdateContactModalOpen'))}
          className={styles.closeButton}
        >
          <IoClose className={styles.closeIcon} />
        </button>

        <Formik
          initialValues={initializedValue}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
          enableReinitialize={true}
        >
          <Form className={styles.form}>
            <div className={styles.labelInputContainer}>
              <label className={styles.label} htmlFor='name'>
                Name
              </label>
              <Field className={styles.input} type='text' name='name' placeholder='Mark' />
              <ErrorMessage name='name' component='span' className={styles.error} />
            </div>

            <div className={styles.labelInputContainer}>
              <label className={styles.label} htmlFor='number'>
                Number
              </label>
              <Field className={styles.input} type='tel' name='number' placeholder='111-11-11' />
              <ErrorMessage name='number' component='span' className={styles.error} />
            </div>

            <button type='submit' className={styles.updateContatcButton}>
              Update contact
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditModal;
