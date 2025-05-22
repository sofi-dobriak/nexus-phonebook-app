import styles from './Navigation.module.css';
import { selecIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useAppSelector } from '../../redux/hooks';

interface ActiveClassProps {
  isActive: boolean;
}

const setActiveClass = ({ isActive }: ActiveClassProps) => {
  return clsx(isActive && styles.active);
};

const Navigation = () => {
  const isLoggedIn = useAppSelector(selecIsLoggedIn);

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
