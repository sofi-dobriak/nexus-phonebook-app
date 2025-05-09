import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import { selecIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && styles.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selecIsLoggedIn);

  return (
    <nav className={styles.navigationContainer}>
      <NavLink to='/' className={setActiveClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to='/contacts' className={setActiveClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
