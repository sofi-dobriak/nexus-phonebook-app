import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.loginPageContainer} data-aos='zoom-in'>
      <div className={styles.loginTextContainer}>
        <h2 className={styles.loginPageTitle}>Welcome back!</h2>
        <p className={styles.loginPageDesc}>Please enter your credentials to access your account</p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
