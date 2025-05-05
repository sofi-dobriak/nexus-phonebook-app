import styles from './RegistrationForm.module.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Required'),
  email: Yup.string().matches(emailRegular, 'Wrong email format').required('Required'),
  password: Yup.string().min(7, 'Minimum 7 characters').required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    const newContact = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    dispatch(register(newContact));
    console.log(newContact);

    action.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <div className={styles.labelInputContainer}>
          <label className={styles.label} htmlFor='username'>
            Username
          </label>
          <Field className={styles.input} type='text' name='username' placeholder='Mark Tven' />
          <ErrorMessage name='username' className={styles.error} component='div' />
        </div>

        <div className={styles.labelInputContainer}>
          <label className={styles.label} htmlFor='email'>
            Email
          </label>
          <Field
            type='email'
            name='email'
            className={styles.input}
            placeholder='mark.tven@mail.com'
          />
          <ErrorMessage name='email' className={styles.error} component='div' />
        </div>

        <div className={styles.labelInputContainer}>
          <label className={styles.label} htmlFor='password'>
            Password
          </label>
          <Field
            className={styles.input}
            type='password'
            name='password'
            placeholder='Enter password'
            autoComplete='false'
          />
          <ErrorMessage name='password' className={styles.error} component='div' />
        </div>

        <button type='submit'>Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
