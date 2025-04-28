import s from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const FeedbackSchema = Yup.object().shape({
  contactName: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Required'),
  contactPhone: Yup.string()
    .matches(/^[\d-]+$/, 'Phone number must contain only digits')
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const initializedValue = {
  contactName: '',
  contactPhone: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.contactName,
        number: values.contactPhone,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initializedValue}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.labelInputContainer}>
          <label className={s.label} htmlFor='contactName'>
            Name
          </label>
          <Field className={s.input} type='text' name='contactName' placeholder='Mark' />
          <ErrorMessage name='contactName' component='span' className={s.error} />
        </div>

        <div className={s.labelInputContainer}>
          <label className={s.label} htmlFor='contactPhone'>
            Number
          </label>
          <Field className={s.input} type='tel' name='contactPhone' placeholder='111-11-11' />
          <ErrorMessage name='contactPhone' component='span' className={s.error} />
        </div>

        <button type='submit'>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
