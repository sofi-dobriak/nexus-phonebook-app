import styles from './EditModal.module.css';
import { IoClose } from 'react-icons/io5';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { editContact } from '../../redux/contacts/operations';
import { selectContact, selectIsUpdateContactModalOpen } from '../../redux/modals/selectors';
import { closeModal, openModal } from '../../redux/modals/slice';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Contact, EditContactFormInitialValues, EditContactFormValues } from '../../types/contact';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Required'),
  number: Yup.string()
    .matches(/^[\d-]+$/, 'Phone number must contain only digits')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const EditModal = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsUpdateContactModalOpen);
  const contact = useAppSelector(selectContact);
  const contactRef = useRef<Contact | null>(null);

  useEffect(() => {
    if (contact && isOpen && contact.name && contact.number) {
      contactRef.current = {
        id: contact.id,
        name: contact.name,
        number: contact.number,
      };
    }
  }, [contact, isOpen]);

  const initializedValue: EditContactFormInitialValues = {
    name: contact?.name || '',
    number: contact?.number || '',
  };

  const handleSubmit = (values: EditContactFormValues): void => {
    const id = contactRef.current?.id;
    if (!id) return;

    dispatch(
      editContact({
        id,
        name: values.name,
        number: values.number,
      })
    );
    dispatch(closeModal('isUpdateContactModalOpen'));
    dispatch(openModal({ modalKey: 'isUpdateMessageModalOpen' }));
  };

  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal('isUpdateContactModalOpen'));
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        dispatch(closeModal('isUpdateContactModalOpen'));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return (): void => document.removeEventListener('keydown', handleKeyDown);
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
