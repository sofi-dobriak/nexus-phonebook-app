import styles from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';

interface InitialValues {
  email: string;
  password: string;
}

const initialValues: InitialValues = {
  email: '',
  password: '',
};

const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegular, 'Wrong email format').required('Required'),
  password: Yup.string().min(7, 'Minimum 7 characters').required('Required'),
});

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: FormValues, action: FormikHelpers<FormValues>) => {
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
