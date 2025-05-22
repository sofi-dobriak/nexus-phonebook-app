import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import clsx from 'clsx';

interface ActiveClass {
  isActive: boolean;
}

const setActiveClass = ({ isActive }: ActiveClass) => {
  return clsx(isActive && styles.active);
};

const AuthNav = () => {
  return (
    <div className={styles.authContainer}>
      <NavLink to='/register' className={setActiveClass}>
        Register
      </NavLink>
      <NavLink to='/login' className={setActiveClass}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
