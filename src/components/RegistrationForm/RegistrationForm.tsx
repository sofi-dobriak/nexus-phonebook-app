import styles from './RegistrationForm.module.css';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { RegisterFormInitialValues, RegisterFormValues } from '../../types/user';

const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(16, 'Too Long!').required('Required'),
  email: Yup.string().matches(emailRegular, 'Wrong email format').required('Required'),
  password: Yup.string().min(7, 'Minimum 7 characters').required('Required'),
});

const initialValues: RegisterFormInitialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values: RegisterFormValues, action: FormikHelpers<RegisterFormValues>) => {
    const newContact = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(register(newContact));

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
            <label className={styles.label} htmlFor='username'>
              Username
            </label>
            <Field className={styles.input} type='text' name='name' placeholder='Mark Tven' />
            <ErrorMessage name='name' className={styles.error} component='div' />
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

          <button type='submit' className={styles.registerButton} disabled={!dirty}>
            Register
          </button>

          <Link to='/login' className={styles.linkToLoginPage}>
            Already have an account? Log in!
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
