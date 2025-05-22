import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import { useEffect } from 'react';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <h2 className={styles.titleNotFoundPage}>Page not found...</h2>
      <p className={styles.description}>Automatically redirect to the homepage</p>
    </>
  );
};

export default NotFound;
