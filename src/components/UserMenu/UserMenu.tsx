import styles from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { useMediaQuery } from 'react-responsive';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const UserMenu = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isDesctop = useMediaQuery({ maxWidth: 1200 });

  return (
    <div className={styles.userMenuContainer}>
      {!isDesctop && user && <p className={styles.name}>Welcome, {user.name}</p>}

      <button onClick={() => dispatch(logout())} type='button' className={styles.logOutButton}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
