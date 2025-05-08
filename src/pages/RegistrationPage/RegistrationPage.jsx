import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={styles.registerPageContainers}>
      <div className={styles.registerTextContainer}>
        <h2 className={styles.registerPageTitle}>Create an account</h2>
        <p className={styles.registerPageDesc}>It only takes a few seconds</p>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
