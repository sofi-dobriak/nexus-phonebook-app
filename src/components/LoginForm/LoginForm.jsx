import styles from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

const initialValues = {
  email: '',
  password: '',
};

const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegular, 'Wrong email format').required('Required'),
  password: Yup.string().min(7, 'Minimum 7 characters').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    const newContact = {
      email: values.email,
      password: values.password,
    };

    dispatch(login(newContact));

    action.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ dirty }) => (
        <Form className={styles.form}>
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

          <button type='submit' className={styles.loginButton} disabled={!dirty}>
            Login
          </button>
          <Link to='/register' className={styles.linkToRegisterPage}>
            Don't have an account? Sign up!
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
