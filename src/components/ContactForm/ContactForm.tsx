import styles from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import { openModal } from '../../redux/modals/slice';
import { useAppDispatch } from '../../redux/hooks';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Required'),
  number: Yup.string()
    .matches(/^[\d-]+$/, 'Phone number must contain only digits')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

interface IntialValuesInterface {
  name: string;
  number: string;
}

interface FormValues {
  name: string;
  number: string;
}

const initializedValue: IntialValuesInterface = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>): void => {
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
      {({ dirty }) => (
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

          <button type='submit' className={styles.addContatcButton} disabled={!dirty}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
