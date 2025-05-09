import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { openModal } from '../../redux/modals/slice';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Required'),
  number: Yup.string()
    .matches(/^[\d-]+$/, 'Phone number must contain only digits')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const initializedValue = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );

    dispatch(openModal({ modalKey: 'isAddMessageModalOpen' }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initializedValue}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ isValid, dirty }) => (
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

          <button type='submit' className={styles.addContatcButton} disabled={!(isValid && dirty)}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
